import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";
import PageLink from "./Links";
import SearchForm from "./SearchForm";

export default function LocationsList() {
      // TODO: Add useState to track data from useEffect
  const [page, changePage] = useState(1);
  const [incoming, updateIncoming] = useState({ results: [] });
  const [locSearch, updateLocSearch] = useState("");
  const newLocSearch = (query) => {
    query && updateLocSearch(query);
  }
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const fetchData = () => {
      console.log("Page updated to: ", page);
      axios
        .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
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

  function locIncludes(item, query){
    return item.toLowerCase().includes(query.toLowerCase());
  }

  return (
    <section className="location-list">
      <div className="heading">
      {page > 1 ? <PageLink updater={updater} val={-1} /> : <span></span>}
      <h2>Locations</h2>
      <h3>page {page}</h3>
      <PageLink updater={updater} val={1} />
      <p>Search by name:</p>
      <SearchForm updateSearch={newLocSearch}/>
      </div>
      <div className="location-card-list">
      {incoming.results.filter(item => {
        return locIncludes(item.name, locSearch);
      }).map((person) => {
        return (
          <LocationCard name={person.name} type={person.type} dimension={person.dimension} />
        );
      })}
      </div>
    </section>
  );
}
