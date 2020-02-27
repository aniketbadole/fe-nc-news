import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import { Router } from "@reach/router";
import Home from "./components/Home";
import ArticleById from "./components/ArticleById";
import Footer from "./components/Footer";
import UserByUsername from "./components/UserByUsername";
import CommentsList from "./components/CommentsList";
import Topics from "./components/Topics";
// import ArticleByTopic from "./components/ArticleByTopic";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Nav />
      <Router>
        <Home path="/" />
        <Articles path="/articles" />
        <ArticleById path="/articles/:article_id" />
        <UserByUsername path="/users/:username" />
        <CommentsList path="/articles/:article_id/comments" />
        <Topics path="/topics" />
        <Articles path="/topics/:topic" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
