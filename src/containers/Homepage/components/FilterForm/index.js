import { Button, Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import React, { Component } from "react";
import "./style.scss";
import SearchIcon from '@material-ui/icons/Search';

class FilterForm extends Component {

    state = {
        jobTypes: ["All", "Part-time", "Full-time", "Freelancer"],
        // fields: {
        searchKeyword: "",
        activeJobType: []
        // }
    }

    handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        let { activeJobType } = this.state;

        switch (fieldName) {
            case "searchKeyword":
                // searchKeyword = fieldValue;
                this.setState({ searchKeyword: fieldValue });
                break;

            case "jobType":
                if (activeJobType.includes(fieldValue)) {
                    const index = activeJobType.indexOf(fieldValue);
                    if (index > -1) {
                        activeJobType.splice(index, 1);
                    }
                } else {
                    activeJobType.push(fieldValue);
                }
                break;
        }
        this.setState({ activeJobType }, () => console.log(this.state));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { searchKeyword, activeJobType } = this.state;

        if (searchKeyword || activeJobType.length > 0) {
            let payload = {
                searchKeyword: searchKeyword,
                jobType: activeJobType.join(",")
            }
            console.log(payload);
            this.props.getJobsAction(payload);
        }
    }

    render() {
        let { jobTypes, activeJobType, searchKeyword } = this.state;
        return (
            <div className="filter-form-container">
                <TextField
                    // error
                    id="search-box"
                    name="searchKeyword"
                    className="searchbox"
                    label="Search by Keyword"
                    // defaultValue=""
                    // helperText=""
                    fullWidth
                    onChange={this.handleChange}
                    value={searchKeyword}
                />

                {jobTypes.map((jobType, index) =>
                    <FormControlLabel
                        control={<Checkbox
                            color="primary"
                            name="jobType"
                            onChange={this.handleChange}
                            checked={activeJobType.includes(jobType)}
                            value={jobType}
                        />
                        }
                        label={jobType}
                    />)}

                <Button variant="contained" onClick={this.handleSubmit}><SearchIcon fontSize="small" />Search</Button>
            </div>
        );
    }
}

export default FilterForm;