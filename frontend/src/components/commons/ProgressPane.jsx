import React, { Component } from "react";
import PropTypes from "prop-types";
import ProgressNode from "./ProgressNode";
import LOCALIZE from "../../text_resources";
import scrollToTop from "../../helpers/scrollToTop";
import BackToTop from "../commons/BackToTop";

class ProgressPane extends Component {
  static propTypes = {
    progressSpecs: PropTypes.array.isRequired,
    currentNode: PropTypes.number.isRequired,
    paneTitle: PropTypes.string, //optional title parameter
    exitButton: PropTypes.object // optional exit button, to leave the ProgressPane
  };

  state = {
    currentNode: this.props.currentNode,
    currentBody: this.props.progressSpecs[this.props.currentNode].body
  };

  changeNode(diff) {
    const index = this.state.currentNode + diff;
    this.setState({ currentNode: index, currentBody: this.props.progressSpecs[index].body });
    scrollToTop();
  }

  render() {
    return (
      <div>
        <div>
          <div aria-label="progress" className="step-indicator">
            <ul className="steps">
              {this.props.progressSpecs.map(tab => (
                <ProgressNode
                  key={tab.id}
                  id={tab.id}
                  text={tab.text}
                  current={this.state.currentNode}
                />
              ))}
            </ul>
          </div>
          {this.props.paneTitle && <h1 className="green-divider">{this.props.paneTitle}</h1>}
          {this.state.currentBody}
          {this.state.currentNode < this.props.progressSpecs.length - 1 && (
            <div className="centered-buttons">
              <button
                type="button"
                className="btn btn-primary btn-wide"
                onClick={() => this.changeNode(1)}
              >
                {LOCALIZE.commons.nextButton}
              </button>
            </div>
          )}
          {this.state.currentNode === this.props.progressSpecs.length - 1 && (
            <div className="centered-buttons">{this.props.exitButton}</div>
          )}
          {this.state.currentNode > 0 && (
            <div className="centered-buttons">
              <button
                type="button"
                className="btn btn-secondary btn-wide"
                onClick={() => this.changeNode(-1)}
              >
                {LOCALIZE.commons.backButton}
              </button>
            </div>
          )}
        </div>
        <BackToTop />
      </div>
    );
  }
}

export default ProgressPane;