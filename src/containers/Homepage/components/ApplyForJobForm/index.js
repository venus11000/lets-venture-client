import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from "@material-ui/core";
import React, { Component } from "react";
import "./style.scss";

class ApplyForJob extends Component {

    state = {
        fields: {
            name: "",
            email: "",
            mobile: "",
            resume: "",
            iAgree: false
        },
        errors: {
            name: "",
            email: "",
            mobile: "",
            resume: "",
            iAgree: ""
        }
    }

    handleChange = (event) => {
        let { fields, errors } = this.state;
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        switch (fieldName) {
            case "name":
            case "email":
            case "mobile":
                fields[fieldName] = fieldValue;
                errors[fieldName] = fieldValue ? "" : "Required!";
                break;

            case "iAgree":
                fields[fieldName] = !fields[fieldName];
                errors[fieldName] = fieldValue ? "" : "Required!";
                break;

            case "resume":
                var file = event.target.files[0];
                fields[fieldName] = file;
                console.log(file.size);
                if (file.size > Number(1024 * 1024 * 10)) {  // bytes in size
                    errors[fieldName] = "File Size should be less 10MB";
                } else {
                    errors[fieldName] = event.target.files[0] ? "" : "Required!";
                }
                break;

            default:
                fields[fieldName] = fieldValue;
                errors[fieldName] = "";
                break;
        }

        this.setState({ fields, errors }, () => console.log(this.state));
    }

    handleSubmit = (event) => {
        let { fields, errors } = this.state;
        console.log(fields, errors);
        let requiredFields = ["name", "email", "mobile", "resume", "iAgree"];
        requiredFields.map(field => {
            if (!fields[field]) {
                errors[field] = "Required!";
            }
        });
        this.setState({ errors }, () => {
            let isValid = requiredFields.every(field => fields[field] && !errors[field]);

            if (isValid) {
                this.props.showPopup({
                    header: "Confirmation of Application",
                    component: this.confirmationMessage(this.props.job)
                });
            }
        });
    }

    confirmationMessage = (job) => {
        return (
            <div>
                <div className="confirmation-message">Thanks for applying for <b>{job.title}</b> job on <b>{job.location}</b>.</div>
                <Button variant="contained" color="primary" onClick={this.props.hidePopup}>Got it</Button>
            </div>
        );
    }

    render() {
        let { fields, errors } = this.state;
        return (
            <Grid container spacing={0} style={{ width: "500px" }}>
                <Grid className="form-label" item xs={6}>
                    <b>Name:</b>
                </Grid>
                <Grid className="form-label" item xs={6}>
                    <TextField
                        error={errors.name}
                        name="name"
                        // defaultValue=""
                        helperText={errors.name}
                        fullWidth
                        onChange={this.handleChange}
                        value={fields.name}
                    />
                </Grid>

                <Grid className="form-label" item xs={6}>
                    <b>Email:</b>
                </Grid>
                <Grid className="form-label" item xs={6}>
                    <TextField
                        error={errors.email}
                        name="email"
                        // defaultValue=""
                        helperText={errors.email}
                        fullWidth
                        onChange={this.handleChange}
                        value={fields.email}
                    />
                </Grid>

                <Grid className="form-label" item xs={6}>
                    <b>Mobile:</b>
                </Grid>
                <Grid className="form-label" item xs={6}>
                    <TextField
                        error={errors.mobile}
                        name="mobile"
                        // defaultValue=""
                        helperText={errors.mobile}
                        fullWidth
                        onChange={this.handleChange}
                        value={fields.mobile}
                    />
                </Grid>

                <Grid className="form-label" item xs={6}>
                    <b>Upload Resume:</b>
                </Grid>
                <Grid className="form-label" item xs={6}>
                    <div>
                        <Button
                            containerElement='label' // <-- Just add me!                                                        
                            label='My Label'
                            name="resume"
                        >
                            <input
                                type="file"
                                name="resume"
                                // multiple={true}
                                accept="image/*"
                                accept=".doc, .docx,.pdf"
                                encType="multipart/form-data"
                                onChange={this.handleChange}
                            />
                        </Button>
                    </div>
                    {errors.resume && <div style={{ color: "red" }}>{errors.resume}</div>}
                </Grid>

                <Grid className="form-label" item xs={12}>
                    <FormControlLabel
                        control={<Checkbox
                            color="primary"
                            name="iAgree"
                            onChange={this.handleChange}
                            checked={fields.iAgree}
                            value={!fields.iAgree}
                        />
                        }
                        label={<p>I agree to Lets Venture Terms & Conditions {errors.iAgree && <span style={{ color: "red" }}>({errors.iAgree})</span>}</p>}
                    />

                </Grid>

                <Box>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>Apply</Button>
                </Box>
            </Grid>
        );
    }
}

export default ApplyForJob;