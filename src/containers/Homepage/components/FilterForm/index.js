import { Button, Checkbox, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import React, { Component } from "react";
import "./style.scss";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

class FilterForm extends Component {

    state = {
        jobTypes: [{
            label: "All",
            key: ""
        }, {
            label: "Part-time",
            key: "Part-time",
        }, {
            label: "Full-time",
            key: "Full-time",
        }, {
            label: "Freelancer",
            key: "Freelancer"
        }],
        searchKeyword: "",
        location: "",
        experience: "",
        activeJobType: [],
        showAdvancedSearchOptoins: false
    }

    toggleAdvancedOtions = (toggle) => this.setState({ showAdvancedSearchOptoins: toggle });

    getAdvancedOptions = () => {
        let { experience, location } = this.state;
        return (
            <div className="advanced-options">
                <FormControl className="filter-item">
                    <InputLabel id="filter-by-location">Filter By Location</InputLabel>
                    <Select
                        name="location"
                        value={location}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={""}>Select Location</MenuItem>
                        <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
                        <MenuItem value={"Delhi"}>Delhi</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className="filter-item">
                    <InputLabel id="filter-by-experience">Filter By Experience</InputLabel>
                    <Select
                        name="experience"
                        value={experience}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={""}>Select Experience</MenuItem>
                        <MenuItem value={"0-1 years"}>0-1 years</MenuItem>
                        <MenuItem value={"1-2 years"}>1-2 years</MenuItem>
                    </Select>
                </FormControl>
                <IconButton onClick={() => this.toggleAdvancedOtions(false)}><CloseIcon fontSize="small" /></IconButton>
            </div>
        );
    }

    handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        let { searchKeyword, activeJobType, location, experience } = this.state;

        switch (fieldName) {
            case "searchKeyword":
                searchKeyword = fieldValue;
                break;

            case "location":
                location = fieldValue;
                break;

            case "experience":
                experience = fieldValue;
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
        this.setState({ searchKeyword, location, experience, activeJobType }, () => console.log(this.state));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { searchKeyword, activeJobType, location, experience } = this.state;

        if (searchKeyword || activeJobType.length > 0 || location || experience) {
            let payload = {
                searchKeyword: searchKeyword,
                jobType: activeJobType.join(","),
                location, experience
            }
            console.log(payload);
            this.props.getJobsAction(payload);
        }
    }

    render() {
        let { jobTypes, activeJobType, searchKeyword, showAdvancedSearchOptoins } = this.state;
        return (
            <div className="filter-form-container">
                <div className="filter-form-content">
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
                                checked={activeJobType.includes(jobType.key)}
                                value={jobType.key}
                            />
                            }
                            label={jobType.label}
                        />)}

                    <Button variant="contained" onClick={this.handleSubmit}><SearchIcon fontSize="small" />Search</Button>
                    {showAdvancedSearchOptoins ? this.getAdvancedOptions() : <div className="pointer" onClick={() => this.toggleAdvancedOtions(true)}>Show Advanced Options</div>}
                </div>
            </div>
        );
    }
}

export default FilterForm;