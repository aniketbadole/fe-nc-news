import React, { Component } from "react";
import * as api from "../api";
import ChangeVotes from "./ChangeVotes";

class CommentsList extends Component {
  state = {
    comments: [],
    username: "jessjelly",
    body: ""
  };
  render() {
    return (
      <div>
        <form>
          <label>
            Add comment:
            <input
              type="text"
              name="body"
              size="50"
              onChange={this.handleChange}
              value={this.state.body}
            />
          </label>
          <button onClick={this.postNewComment}>Post</button>
        </form>
        <ul className="comments-card">
          {this.state.comments.map(eachComment => {
            return (
              <li key={eachComment.comment_id} className="each-comment">
                <p>{eachComment.body}</p>
                <p>author: {eachComment.author}</p>
                <ChangeVotes
                  votes={eachComment.votes}
                  comment_id={eachComment.comment_id}
                  article_id={eachComment.article_id}
                />
                <p>{eachComment.created_at}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleChange = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  postNewComment = event => {
    event.preventDefault();
    console.log(event);
    const { username, body } = this.state;
    console.log(username, body);
    api.postComment(this.props.article_id, username, body).then(newComment => {
      this.addItem(newComment);
    });
  };

  addItem = newComment => {
    console.log(newComment, "this is the new comment");
    this.setState(state => {
      return { comments: [newComment.comment, ...state.comments] };
    });
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(data => {
      this.setState({ comments: data.comments });
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps, prevState, "previos props and state");
  // }
}

export default CommentsList;
