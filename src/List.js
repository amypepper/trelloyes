import React from "react";
import Card from "./Card";
import "./List.css";

export default function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.listTitle}</h2>
      </header>
      <div className="List-cards" id={props.id}>
        {props.cards.map((cardObj) => (
          <Card
            key={cardObj.id}
            id={cardObj.id}
            title={cardObj.title}
            content={cardObj.content}
            onDeleteClick={props.onDeleteClick}
          />
        ))}
        <button
          type="button"
          className="List-add-button"
          onClick={() => props.onAddClick(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}
