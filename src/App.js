import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList"


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
    </main>
  );
}
