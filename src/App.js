import React from "react";
import ListFilm from "./components/listFilms";
import Header from "./components/header";
import DetailFilm from "./components/DetailFilm";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={ListFilm} />{" "}
      <Route path="/film/:id" component={DetailFilm} />
    </Router>
  );
}

export default App;
