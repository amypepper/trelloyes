import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Card from "./Card";
import STORE from "./store";

describe("Card component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <Card
          key={STORE.allCards.a.id}
          title={STORE.allCards.a.title}
          content={STORE.allCards.a.content}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
