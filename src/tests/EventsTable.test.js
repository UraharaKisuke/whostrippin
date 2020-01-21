import React from "react";
import { shallow } from "enzyme";
import EventsTable from "../components/EventsTable.component";

describe("EventsTable component", () => {
  const subject = shallow(<EventsTable events={[]} />);

  it("renders without crashing", () => {
    expect(subject).toMatchSnapshot();
  });
});
