import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/collapsing-item.css";
import LOCALIZE from "../../text_resources";
import { actionShape } from "./constants";

const styles = {
  responseTypeIcon: {
    color: "white",
    margin: "0 8px",
    padding: 3,
    backgroundColor: "#00565E",
    border: "3px solid #009FAE",
    borderRadius: 4
  },
  responseType: {
    color: "#00565E",
    textDecoration: "underline"
  },
  hr: {
    margin: "16px 0 16px 0"
  },
  editButton: {
    float: "right"
  }
};

class ActionViewTask extends Component {
  static propTypes = {
    action: actionShape
  };

  render() {
    const { action } = this.props;
    return (
      <div aria-label={LOCALIZE.ariaLabel.taskDetails}>
        <div tabIndex="0">
          <p className="font-weight-bold">{LOCALIZE.emibTest.inboxPage.taskContent.task}</p>
          <p>{action.task}</p>
        </div>
        <hr style={styles.hr} />
        <div tabIndex="0">
          <p className="font-weight-bold">
            {LOCALIZE.emibTest.inboxPage.emailResponse.reasonsForAction}
          </p>
          <p>{action.reasonsForAction}</p>
        </div>
        <hr style={styles.hr} />
        <div aria-label={LOCALIZE.ariaLabel.taskOptions}>
          <button className="btn btn-primary" style={styles.editButton}>
            {LOCALIZE.emibTest.inboxPage.emailCommons.editButton}
          </button>
          <button className="btn btn-danger">
            {LOCALIZE.emibTest.inboxPage.emailCommons.deleteButton}
          </button>
        </div>
      </div>
    );
  }
}
export default ActionViewTask;
