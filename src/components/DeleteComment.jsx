// currently not using this file
// CommentsList.jsx has the delete comment functionality

import React, { Component } from "react";
import * as api from "../api";

class DeleteComment extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleDeleteComment}>Delete Comment</button>
      </div>
    );
  }

  handleDeleteComment = event => {
    event.preventDefault();
    const { comment_id } = this.props;
    console.log(comment_id, "<< comment_id");
    api.deleteComment(comment_id).then(deletedComment => {
      this.props.removeComment(deletedComment);
    });
  };

  // removeComment = deletedComment => {
  //   this.setState(state => {
  //     return {
  //       comments: [...state.comments]
  //       .filter(eachComment => {
  //         // console.log(eachComment, deletedComment, "~~~~~~");
  //         return eachComment !== deletedComment;
  //       })
  //     };
  //   });
  // };
}

export default DeleteComment;
