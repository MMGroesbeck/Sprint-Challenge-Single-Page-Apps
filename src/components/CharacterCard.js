import React from "react";

export default function CharacterCard(props) {
  return (<span>
    <h2>Name: {props.name}</h2>
    {props.type && <p>Type: {props.type}</p>}
    <p>Origin: {props.origin.name}</p>
  </span>);
}
