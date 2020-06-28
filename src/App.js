import React from "react";
import List from "./List";
import "./App.css";

export default class App extends React.Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    },
  };
  render() {
    const { store } = this.props;
    console.log("this.props: ", this.props);
    console.log("this is store: ", store);

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map((item) => (
            <List
              key={item.id}
              listTitle={item.header}
              cards={item.cardIds.map((id) => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}
