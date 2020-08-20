import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../api";

class Articles extends Component {
  state = {
    articles: [],
    isSorting: false,
    isLoading: true,
    selectedTopic: null,
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
            <button name="author" onClick={this.handleClick}>
              author
            </button>
            <ArticlesList articles={this.state.articles} />
          </div>
        )}
      </main>
    );
  }

  handleClick = (event) => {
    event.preventDefault();

    let query = {};
    if (this.state.isSorting === false) {
      query.sort_by = event.target.name;
      query.order = "asc";
    } else {
      query.sort_by = event.target.name;
      query.order = "desc";
    }
    api.getAllArticles(query).then((data) => {
      this.setState((currentState) => {
        return { articles: data.articles, isSorting: !currentState.isSorting };
      });
    });
  };

  componentDidMount() {
    this.fetchArticles({}).then((data) => {
      this.setState({
        articles: data.articles,
        isLoading: false,
      });
    });
  }

  fetchArticles = () => {
    let query = { topic: this.props.topic };
    return api.getAllArticles(query);
  };
}

export default Articles;
