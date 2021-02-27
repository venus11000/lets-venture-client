import { Button, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import "./style.scss";

class Header extends Component {
    render() {
        return (
            <Container className="header-container" maxWidth="lg">
                <Grid container spacing={0}>
                    <Grid item xs={12} className="header-content">
                        <div>
                            LV Jobs
                            LOGO
                        </div>
                        <div>For Employee</div>
                        <div>For Applicant</div>
                        <div>Support</div>
                        <div className="right-side-container">
                            <div className="signin-btn">Sign In</div>
                            <Button variant="contained" color="primary">Submit Job</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Header;