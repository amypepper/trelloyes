import React from "react";
import List from "./List";
import STORE from "./store";
import "./App.css";

const newRandomCard = () => {
  const id =
    Math.random().toString(36).substring(2, 4) +
    Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: "lorem ipsum",
  };
};

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}

export default class App extends React.Component {
  static defaultProps = {};

  state = {
    store: STORE,
  };

  handleDeleteCard = (targetCardId) => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map((list) => ({
      ...list,
      cardIds: list.cardIds.filter((id) => id !== targetCardId),
    }));

    const newCards = omit(allCards, targetCardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards,
      },
    });
  };

  handleAddRandomCard = (listId) => {
    const newCard = newRandomCard();
    const { lists, allCards } = this.state.store;
    const newLists = lists.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id],
        };
      }
      return list;
    });

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...allCards,
          [newCard.id]: newCard,
        },
      },
    });
  };

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.store.lists.map((listObj) => (
            <List
              key={listObj.id}
              id={listObj.id}
              listTitle={listObj.header}
              cards={listObj.cardIds.map((id) => this.state.store.allCards[id])}
              onDeleteClick={this.handleDeleteCard}
              onAddClick={this.handleAddRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}
