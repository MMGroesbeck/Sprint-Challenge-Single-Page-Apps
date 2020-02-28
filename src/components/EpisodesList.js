import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import axios from "axios";
import PageLink from "./Links";
import SearchForm from "./SearchForm";

export default function EpisodesList() {
      // TODO: Add useState to track data from useEffect
  const [page, changePage] = useState(1);
  const [incoming, updateIncoming] = useState({ results: [] });
  const [epSearch, updateEpSearch] = useState("");
  const newEpSearch = (query) => {
    query && updateEpSearch(query);
  }
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const fetchData = () => {
      console.log("Page updated to: ", page);
      axios
        .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
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

  function epIncludes(item, query){
    return item.toLowerCase().includes(query.toLowerCase());
  }

  return (
    <section className="episode-list">
      <div className="heading">
      {page > 1 ? <PageLink updater={updater} val={-1} /> : <span></span>}
      <h2>Episodes</h2>
      <h3>page {page}</h3>
      <PageLink updater={updater} val={1} />
      <p>Search by episode name:</p>
      <SearchForm updateSearch={newEpSearch}/>
      </div>
      <div className="episode-card-list">
      {incoming.results.filter(item => {
        return epIncludes(item.name, epSearch);
      }).map((ep) => {
        return (
          <EpisodeCard name={ep.name} episode={ep.episode} air_date={ep.air_date} />
        );
      })}
      </div>
    </section>
  );
}
