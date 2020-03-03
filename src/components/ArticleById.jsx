import React, { Component } from "react";
import { Link } from "@reach/router";
import CommentsList from "./CommentsList";
import * as api from "../api";
import ToggleComments from "./ToggleComments";
import ChangeVotes from "./ChangeVotes";

class ArticleById extends Component {
  state = {
    article: {},
    comments: [],
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
          <div className="article-body">
            <h1>{title}</h1>
            <Link to={`/users/${author}`}>
              <h2 className="heading-link">{author}</h2>
            </Link>
            <h3>
              {new Date(created_at).getDate()}
              {" / "} {new Date(created_at).getMonth()} {" / "}
              {new Date(created_at).getFullYear()} in {topic}
            </h3>
            <p className="article-body">{body}</p>
            <ChangeVotes votes={votes} article_id={article_id} />
            <h4>
              {/* Votes: {votes}  */}
              Article ID: {article_id}
            </h4>
            <h4>Comments: {comment_count}</h4>
            <ToggleComments>
              <CommentsList article_id={article_id} />
            </ToggleComments>
          </div>
        )}
      </main>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleByID(article_id).then(data => {
      this.setState({ article: data.article, isLoading: false });
    });
  }
}

export default ArticleById;

// return "t", "s";
