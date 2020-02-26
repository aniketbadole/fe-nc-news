import React, { Component } from "react";
import * as api from "../api";
// import { Link } from "@reach/router";

class ArticleByTopic extends Component {
  state = {
    articles: []
  };
  render() {
    console.log(this.state.articles);
    const { articles } = this.state;
    return (
      <div>
        <h2>{this.props.topic}</h2>
        {articles.map(eachArticle => {
          return (
            <div className="card" key={eachArticle.article_id}>
              <h3>{eachArticle.title}</h3>
              <h4>{eachArticle.author}</h4>
              <p>
                Votes: {eachArticle.votes} Comments: {eachArticle.comment_count}
              </p>
              <p>Topic: {eachArticle.topic}</p>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    const { topic } = this.props;
    api.getAllArticles({ topic }).then(data => {
      this.setState({ articles: data.articles });
    });
  }
}

export default ArticleByTopic;
