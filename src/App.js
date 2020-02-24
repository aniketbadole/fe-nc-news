import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import { Router } from "@reach/router";
import Home from "./components/Home";
import ArticleById from "./components/ArticleById";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Nav />
      <Router>
        <Home path="/" />
        <Articles path="/articles" />
        <ArticleById path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
