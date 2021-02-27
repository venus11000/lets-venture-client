import { Button, Card, CardContent } from "@material-ui/core";
import React, { Component } from "react";
import "./style.scss";
import ApplyForJobForm from "../ApplyForJobForm";
import Logo from "../../../../images/logo.png";

class JobsList extends Component {
    render() {
        let { data, showPopup, hidePopup } = this.props;
        return (
            <div>
                {data && <div className="total-results">Total Results found: <b>{data.length}</b></div>}
                {data && data.map(job => {
                    return (
                        <Card className="card">
                            <CardContent className="card-content">
                                <div className="company-logo">
                                    <img src={Logo} />
                                </div>
                                <div className="comapny-details">
                                    <h2>{job.title}</h2>
                                    <div>{job.companyName} | {job.location} | {job.experience}</div>
                                    <div><b>Skills: </b>{job.skills}</div>
                                </div>
                                <Button
                                    className="apply-btn"
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                        this.props.showPopup({
                                            header: "Apply For Job",
                                            component: <ApplyForJobForm
                                                job={job}
                                                showPopup={showPopup}
                                                hidePopup={hidePopup}
                                            />
                                        })}
                                >Apply</Button>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default JobsList;