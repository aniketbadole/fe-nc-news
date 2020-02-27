import React, { Component } from "react";

class ToggleComments extends Component {
  state = {
    areCommentsVisible: false
  };
  render() {
    return (
      <div>
        <button onClick={this.showComments}>
          {this.state.areCommentsVisible ? "Hide comments" : "Show comments"}
        </button>
        {this.state.areCommentsVisible && <div>{this.props.children}</div>}
      </div>
    );
  }

  showComments = event => {
    this.setState(currentState => {
      return { areCommentsVisible: !currentState.areCommentsVisible };
    });
  };
}

export default ToggleComments;
