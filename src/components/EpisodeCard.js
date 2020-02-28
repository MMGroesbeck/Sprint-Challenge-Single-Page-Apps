import React from "react";

export default function EpisodeCard(props) {
  return (<span>
    <h2>Episode Name: {props.name}</h2>
    <p>Episode: {props.episode}</p>
    <p>Air Date: {props.air_date}</p>
  </span>);
}