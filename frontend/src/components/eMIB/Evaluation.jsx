import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { styleConstants } from "./styleConstants.js";

class Evaluation extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{LOCALIZE.emibTest.howToPage.evaluation.title}</h2>
          <div>
            <ul>
              <li>{LOCALIZE.emibTest.howToPage.evaluation.bullet1}</li>
              <li>
                {LOCALIZE.emibTest.howToPage.evaluation.bullet2}
                {LOCALIZE.emibTest.howToPage.evaluation.bullet2Link}.
              </li>
              <li>{LOCALIZE.emibTest.howToPage.evaluation.bullet3}</li>
              <li>{LOCALIZE.emibTest.howToPage.evaluation.bullet4}</li>
              <li>{LOCALIZE.emibTest.howToPage.evaluation.bullet5}</li>
            </ul>
          </div>
          <div id="keyLeadershipCompetencies">
            <h3 style={styleConstants.instuctions.h3}>
              {LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection.title}
            </h3>
            <div>
              <p style={styleConstants.instuctions.p}>
                <span className="font-weight-bold">
                  {
                    LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection
                      .para1Title
                  }
                </span>
                {LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection.para1}
              </p>
              <p style={styleConstants.instuctions.p}>
                <span className="font-weight-bold">
                  {
                    LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection
                      .para2Title
                  }
                </span>
                {LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection.para2}
              </p>
              <p style={styleConstants.instuctions.p}>
                <span className="font-weight-bold">
                  {
                    LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection
                      .para3Title
                  }
                </span>
                {LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection.para3}
              </p>
              <p style={styleConstants.instuctions.p}>
                <span className="font-weight-bold">
                  {
                    LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection
                      .para4Title
                  }
                </span>
                {LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection.para4}
              </p>
              <p style={styleConstants.instuctions.p}>
                <span className="font-weight-bold">
                  {
                    LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection
                      .para5Title
                  }
                </span>
                {LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection.para5}
              </p>
              <p style={styleConstants.instuctions.p}>
                <span className="font-weight-bold">
                  {
                    LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection
                      .para6Title
                  }
                </span>
                {LOCALIZE.emibTest.howToPage.evaluation.keyLeadershipCompetenciesSection.para6}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Evaluation;
