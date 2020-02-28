import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodesList from "./components/EpisodesList";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route exact path="/characters">
        <CharacterList />
      </Route>
      <Route exact path="/locations">
        <LocationsList />
      </Route>
      <Route exact path="/episodes">
        <EpisodesList />
      </Route>
    </main>
  );
}
