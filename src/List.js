import React from "react";
import Card from "./Card";
import "./List.css";

export default function List(props) {
  console.log("props.cards: ", props.cards);

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.listTitle}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((cardObj) => (
          <Card
            key={cardObj.id}
            title={cardObj.title}
            content={cardObj.content}
          />
        ))}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}
