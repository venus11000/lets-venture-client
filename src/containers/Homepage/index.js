import { CircularProgress, Container, Grid } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getJobsAction } from "./action";
import FilterForm from "./components/FilterForm";
import JobsList from "./components/JobsList";
import { showPopup, hidePopup } from "../../components/Popup/action";

class Homepage extends Component {

    componentDidMount() {
        this.props.getJobsAction();
    }

    getSomethingWentWrong = () => <Alert severity="error">Something went wrong!!!</Alert>

    render() {
        let { loading, data, error, showPopup, hidePopup } = this.props;
        return (
            <Container className="homepage-container" maxWidth="lg">
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <FilterForm getJobsAction={this.props.getJobsAction} />
                        <div className="jobs-list">
                            {loading ? <CircularProgress /> :
                                error ? this.getSomethingWentWrong() :
                                    <JobsList data={data} showPopup={showPopup} hidePopup={hidePopup} />}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.homepage.jobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getJobsAction, showPopup, hidePopup }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);