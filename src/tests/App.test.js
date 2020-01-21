import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  const subject = shallow(<App />);

  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("use DebounceInput component", () => {
    expect(subject.find("DebounceInput")).toHaveLength(1);
    expect(subject).toMatchSnapshot();
  });
});
