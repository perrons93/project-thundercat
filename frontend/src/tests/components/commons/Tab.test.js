import React from "react";
import { shallow } from "enzyme";
import Tab, { styles } from "../../../components/commons/Tab";

it("renders selected tab", () => {
  const wrapper = shallow(<Tab tabName="Tab1" selected={true} />);
  const initialMessage = (
    <span>
      <li role="menuitem" style={styles.li} aria-current="page">
        <button id="Tab1" style={{ ...styles.button, ...styles.active }} aria-selected="true">
          Tab1
        </button>
      </li>
    </span>
  );
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders unselected tab", () => {
  const wrapper = shallow(<Tab tabName="Tab2" selected={false} />);
  const initialMessage = (
    <span>
      <li role="menuitem" style={styles.li}>
        <button id="Tab2" style={styles.button} aria-selected="false">
          Tab2
        </button>
      </li>
    </span>
  );
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
