import React from "react";
import { shallow } from "enzyme";
import ArtistCard from "../components/ArtistCard.component";
//Mock data for unit tests
const mockArtist = {
  id: 123,
  name: "hallo",
  url: "hallo",
  image_url: "hallo",
  thumb_url: "hallo",
  facebook_page_url: "hallo",
  mbid: "hallo",
  tracker_count: 123,
  upcoming_event_count: 123
};

describe("ArtistCard component", () => {
  const subject = shallow(<ArtistCard artist={mockArtist} />);
  it("renders without crashing", () => {
    expect(subject).toMatchSnapshot();
  });

  it("display the required informations", () => {
    expect(subject.find("h5").html()).toEqual(
      '<h5 class="card-title">hallo</h5>'
    );
    expect(subject.find("p").html()).toEqual('<p class="card-text">hallo</p>');
    expect(subject.find("a").html()).toEqual(
      '<a href="hallo" class="btn btn-primary">Go to facebook</a>'
    );
  });
});
