import React, { Component } from "react";
import * as api from "../api";

class ChangeVotes extends Component {
  state = {
    voteCount: 0
  };
  render() {
    // console.log(this.props);
    return (
      <span>
        upvotes: {this.props.votes + this.state.voteCount}
        <button onClick={() => this.changeVotes(1)}>⬆</button>
        <button onClick={() => this.changeVotes(-1)}>⬇</button>
      </span>
    );
  }
  changeVotes = voteChange => {
    const { comment_id } = this.props;
    api.appendVotes(comment_id, voteChange);
    this.setState(prevState => {
      return {
        voteCount: prevState.voteCount + voteChange
      };
    });
  };
}

export default ChangeVotes;
