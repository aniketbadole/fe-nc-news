import React, { Component } from "react";
import Axios from "axios";

class ArticleById extends Component {
  state = {
    article: {},
    isLoading: true
  };
  render() {
    return (
      <main>
        {this.state.isLoading ? (
          <p>Loading, please wait...</p>
        ) : (
          <div>
            <h1>Article:</h1>
          </div>
        )}
      </main>
    );
  }

  getArticle = () => {
    Axios.get(`https://aniket-nc-news.herokuapp.com/api/articles/${id}`).then(
      ({ data }) => {
        this.setState({ article: data.article, isLoading: false });
      }
    );
  };

  componentDidMount() {
    this.getArticle();
  }
}

export default ArticleById;
