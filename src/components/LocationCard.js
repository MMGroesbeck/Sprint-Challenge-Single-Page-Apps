import React from "react";

export default function LocationCard(props) {
  // return <span>todo: location</span>;
  return (<span>
    <h2>Name: {props.name}</h2>
    {props.type && <p>Type: {props.type}</p>}
    <p>Dimension: {props.dimension}</p>
  </span>);
}
