import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showPopup, hidePopup } from "./action";

class Popup extends Component {
    render() {
        let { popup, hidePopup } = this.props;
        return (
            <Dialog
                open={Object.keys(popup).length > 0 ? true : false}
                onClose={hidePopup}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{popup.header}</DialogTitle>
                <DialogContent>
                    {popup.component}
                </DialogContent>
            </Dialog>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        popup: state.popup
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ showPopup, hidePopup }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);