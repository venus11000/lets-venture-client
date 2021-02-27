import { Button, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import "./style.scss";

class Footer extends Component {
    render() {
        return (
            <Container className="footer-container" maxWidth="lg">
                <Grid container spacing={0}>
                    <Grid item xs={12} className="footer-content">
                        <div>Copy Rights Protected, 2021 | Let's Venture</div>
                        <div>Terms | Contact Us</div>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Footer;