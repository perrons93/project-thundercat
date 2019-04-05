import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import EditEmail from "./EditEmail";
import EditTask from "./EditTask";
import { Modal } from "react-bootstrap";
import { ACTION_TYPE, EDIT_MODE } from "./constants";

const styles = {
  icon: {
    float: "left",
    marginTop: 14,
    marginRight: 8
  },
  dialogHeaderText: {
    float: "left",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  modalHeader: {
    backgroundColor: "#00565E",
    color: "white",
    fontSize: 16,
    fontWeight: 600,
    borderRadius: "10px 10px 0px 0px"
  }
};

class EditActionDialog extends Component {
  static propTypes = {
    emailId: PropTypes.number.isRequired,
    showDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    saveAction: PropTypes.func.isRequired,
    actionType: PropTypes.oneOf([ACTION_TYPE.email, ACTION_TYPE.task]).isRequired,
    editMode: PropTypes.oneOf([EDIT_MODE.create, EDIT_MODE.update]).isRequired
  };

  state = {
    action: {}
  };

  handleSave = () => {
    this.props.saveAction(this.props.emailId, this.state.action);
    this.props.handleClose();
  };

  editAction = updatedAction => {
    this.setState({ action: updatedAction });
  };

  render() {
    const { showDialog, handleClose, actionType, editMode } = this.props;
    return (
      <div>
        <Modal show={showDialog} onHide={handleClose}>
          <div>
            <Modal.Header style={styles.modalHeader}>
              {
                <div style={styles.title}>
                  {actionType === ACTION_TYPE.email && (
                    <div>
                      <i style={styles.icon} className="fas fa-envelope" />
                      <h3 style={styles.dialogHeaderText}>
                        {editMode === EDIT_MODE.create &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.addEmail}
                        {editMode === EDIT_MODE.update &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.editEmail}
                      </h3>
                    </div>
                  )}
                  {actionType === ACTION_TYPE.task && (
                    <div>
                      <i style={styles.icon} className="fas fa-tasks" />
                      <h3 style={styles.dialogHeaderText}>
                        {editMode === EDIT_MODE.create &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.addTask}
                        {editMode === EDIT_MODE.update &&
                          LOCALIZE.emibTest.inboxPage.editActionDialog.editTask}
                      </h3>
                    </div>
                  )}
                </div>
              }
            </Modal.Header>
            <Modal.Body>
              {actionType === ACTION_TYPE.email && <EditEmail onChange={this.editAction} />}
              {actionType === ACTION_TYPE.task && <EditTask />}
            </Modal.Body>
            <Modal.Footer>
              <div>
                <div>
                  <button
                    id="unit-test-email-response-button"
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleSave}
                  >
                    {LOCALIZE.emibTest.inboxPage.editActionDialog.save}
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    );
  }
}
export default EditActionDialog;
