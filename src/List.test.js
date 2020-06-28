import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List";
import STORE from "./store";

describe("List component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <List
        key={STORE.lists[0].id}
        listTitle={STORE.lists[0].header}
        cards={STORE.lists[0].cardIds.map((id) => STORE.allCards[id])}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <List
          key={STORE.lists[0].id}
          listTitle={STORE.lists[0].header}
          cards={STORE.lists[0].cardIds.map((id) => STORE.allCards[id])}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
