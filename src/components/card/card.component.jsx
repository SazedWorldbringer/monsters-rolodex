import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img src={props.monster.images.md} alt={props.monster.name} />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);

/* <img
      src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`}
      alt="monster"
    />*/

// fix the image
