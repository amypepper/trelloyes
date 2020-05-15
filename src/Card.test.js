import React from "react";
import Card from "./Card";
import renderer from "react-test-renderer";
import ReactDOM from "react-DOM";

describe("Card component", () => {
  it("renders without crashing", () => {
    // first create a DOM element to render the component into
    const div = document.createElement("div");

    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Card />, div);

    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<Card key="a" title="First card" content="lorem ipsum" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<Card key="j" title="Tenth card" content="lorem ipsum" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
