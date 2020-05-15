import React from "react";
import App from "./App";
import store from "./store";
import List from "./List";
import ReactDOM from "react-DOM";
import renderer from "react-test-renderer";

describe("List component", () => {
  it("renders without crashing", () => {
    // first create a DOM element to render the component into
    const div = document.createElement("div");

    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(
      <App store={store}>
        <List />
      </App>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <List
          header="Second list"
          cards={["b", "c", "d", "f", "h", "i", "k"]}
        ></List>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
