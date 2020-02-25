import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../api";
import axios from "axios";

class Articles extends Component {
  state = {
    articles: [],
    name: "",
    isLoading: true
  };

  render() {
    return (
      <main>
        {this.state.isLoading ? (
          <p>Loading, please wait...</p>
        ) : (
          <div>
            <span>Sort by: </span>
            <button name="created_at" onClick={this.handleClick}>
              date
            </button>
            <button name="comment_count" onClick={this.handleClick}>
              comments
            </button>
            <button name="votes" onClick={this.handleClick}>
              votes
            </button>
            <ArticlesList articles={this.state.articles} />
          </div>
        )}
      </main>
    );
  }

  handleClick = event => {
    console.log(event.target.name);
    console.log(this.state, "**");
    event.preventDefault();
    axios
      .get(
        `https://aniket-nc-news.herokuapp.com/api/articles?sort_by=${event.target.name}`,
        { name: this.state.name }
      )
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      });
  };

  componentDidMount() {
    api.getAllArticles().then(data => {
      this.setState({ articles: data.articles, isLoading: false });
    });
  }
}

export default Articles;
