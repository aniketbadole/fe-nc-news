import React, { Component } from "react";
import * as api from "../api";

class CommentsList extends Component {
  state = {
    comments: []
  };
  render() {
    const { comment_id, author, votes, created_at, body } = this.state.comments;
    return (
      <ul className="comments-card">
        {this.state.comments.map(eachComment => {
          return (
            <li key={eachComment.comment_id} className="each-comment">
              <p>{eachComment.body}</p>
              <p>
                author: {eachComment.author}, upvotes: {eachComment.votes}
              </p>
              <p>{eachComment.created_at}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(data => {
      this.setState({ comments: data.comments });
    });
  }
}

export default CommentsList;
