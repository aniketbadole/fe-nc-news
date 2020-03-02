import React, { Component } from "react";
import * as api from "../api";
import ChangeVotes from "./ChangeVotes";
// import DeleteComment from "./DeleteComment";

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
              required
              type="text"
              name="body"
              size="40"
              onChange={this.handleChange}
              value={this.state.body}
            />
          </label>
          <button onClick={this.postNewComment}>Post comment</button>
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
                {eachComment.author === this.state.username && (
                  // <DeleteComment
                  //   comment_id={eachComment.comment_id}
                  //   removeComment={this.removeComment}
                  // />
                  <button
                    onClick={() =>
                      this.handleDeleteComment(eachComment.comment_id)
                    }
                  >
                    !!DELETE!!
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postNewComment = event => {
    event.preventDefault();
    const { username, body } = this.state;
    api.postComment(this.props.article_id, username, body).then(newComment => {
      this.addItem(newComment);
    });
  };

  addItem = newComment => {
    this.setState(state => {
      return { comments: [newComment.comment, ...state.comments] };
    });
  };

  componentDidMount() {
    const { article_id } = this.props;
    console.log(article_id, "cdm");

    api.getCommentsByArticleId(article_id).then(data => {
      this.setState({ comments: data.comments });
    });
  }

  handleDeleteComment = comment_id => {
    console.log(comment_id, "<< comment_id");
    api.deleteComment(comment_id).then(deleted_comment => {
      this.removeComment(comment_id);
    });
  };

  removeComment = deleted_comment => {
    console.log(deleted_comment, "deletedcomment");

    this.setState(state => {
      return {
        comments: [...state.comments].filter(
          eachComment => eachComment.comment_id !== deleted_comment
        )
      };
    });
  };
  // componentDidUpdate(prevProps, prevState) {
  //   const { comments, article_id } = this.state;
  //   if (comments !== prevState.comments) {
  //     api.getCommentsByArticleId(article_id).then(data => {
  //       this.setState({ comments: data.comments });
  //     });
  //   }
  // }
}

export default CommentsList;
