import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import axios from "axios";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  render() {
    // const { articles } = this.state;
    return (
      <main>
        {this.state.isLoading ? (
          <p>Loading, please wait...</p>
        ) : (
          <ArticlesList articles={this.state.articles} />
        )}
      </main>
    );
  }

  getAllArticles = () => {
    axios
      .get("https://aniket-nc-news.herokuapp.com/api/articles")
      .then(({ data }) => {
        this.setState({ articles: data.articles, isLoading: false });
      });
  };

  componentDidMount() {
    this.getAllArticles();
  }
}

export default Articles;
