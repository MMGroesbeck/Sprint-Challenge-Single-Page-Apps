import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import PageLink from "./Links";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [page, changePage] = useState(1);
  const [incoming, updateIncoming] = useState({ results: [] });
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const fetchData = () => {
      axios
        .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => {
          updateIncoming(response.data);
        })
        .catch(error => {
          console.log("Did not load. ", error);
        });
    };
    fetchData();
  }, [page]);

  function updater(val){
    if (page + val > 0){
      changePage(page + val);
    }
  }

  return (
    <section className="character-list">
      <div className="heading">
      {page > 1 ? <PageLink updater={updater} val={-1} /> : <span></span>}
      <h2>Characters</h2>
      <h3>page {page}</h3>
      <PageLink updater={updater} val={1} />
      </div>
      <div className="character-card-list">
      {incoming.results.map((person, index) => {
        console.log(person);
        return (
          <CharacterCard name={person.name} type={person.type} origin={person.origin} />
        );
      })}
      </div>
    </section>
  );
}
