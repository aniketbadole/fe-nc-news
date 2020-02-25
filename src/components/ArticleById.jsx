import React, { Component } from "react";
// import axios from "axios";
import * as api from "../api";

class ArticleById extends Component {
  state = {
    article: {},
    isLoading: true
  };
  render() {
    const {
      article_id,
      author,
      body,
      comment_count,
      created_at,
      title,
      topic,
      votes
    } = this.state.article;
    return (
      <main>
        {this.state.isLoading ? (
          <p>Loading, please wait...</p>
        ) : (
          <div>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <h3>
              {created_at} in {topic}
            </h3>
            <p>{body}</p>
            <h4>
              Votes: {votes} Article ID: {article_id}
            </h4>
            <h4>Comments: {comment_count}</h4>
          </div>
        )}
      </main>
    );
  }

  // getArticle = () => {
  //   console.log(this.props.article_id, "get article");
  //   axios
  //     .get(
  //       `https://aniket-nc-news.herokuapp.com/api/articles/${this.props.article_id}`
  //     )
  //     .then(({ data }) => {
  //       this.setState({ article: data.article, isLoading: false });
  //     });
  // };

  componentDidMount() {
    // this.getArticle();
    const { article_id } = this.props;
    api.getArticleByID(article_id).then(data => {
      this.setState({ article: data.article, isLoading: false });
    });
  }
}

export default ArticleById;
