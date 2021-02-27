import { Card, CardContent } from "@material-ui/core";
import React, { Component } from "react";
import "./style.scss";

class JobsList extends Component {
    render() {
        let { data } = this.props;
        return (
            <div>
                {data && <div className="total-results">Total Results found: <b>{data.length}</b></div>}
                {data && data.map(job => {
                    return (
                        <Card className="card">
                            <CardContent className="card-content">
                                <div className="company-logo">
                                    {/* {job.logo} */}
                                </div>
                                <div className="comapny-details">
                                    <h2>{job.title}</h2>
                                    <div>{job.companyName} | {job.location} | {job.experience}</div>
                                    <div><b>Skills: </b>{job.skills}</div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default JobsList;