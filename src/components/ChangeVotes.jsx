import React, { Component } from "react";
import * as api from "../api";

class ChangeVotes extends Component {
  state = {
    voteCount: 0
  };
  render() {
    return (
      <span>
        Votes: {this.props.votes + this.state.voteCount}
        <button
          disabled={this.state.voteCount === 1}
          onClick={() => this.changeVotes(1)}
        >
          ⬆
        </button>
        <button
          disabled={this.state.voteCount === -1}
          onClick={() => this.changeVotes(-1)}
        >
          ⬇
        </button>
      </span>
    );
  }
  changeVotes = voteChange => {
    const { comment_id } = this.props;
    if (comment_id) {
      api.appendVotes(comment_id, voteChange);
      this.setState(prevState => {
        return {
          voteCount: prevState.voteCount + voteChange
        };
      });
    } else {
      const { article_id } = this.props;

      api.appendArticleVotes(article_id, voteChange);
      this.setState(prevState => {
        return {
          voteCount: prevState.voteCount + voteChange
        };
      });
    }
  };
}

export default ChangeVotes;
