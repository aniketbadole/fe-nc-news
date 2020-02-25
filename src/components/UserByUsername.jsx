import React, { Component } from "react";
import * as api from "../api";

class UserByUsername extends Component {
  state = {
    user: {},
    isLoading: true
  };
  render() {
    const { username, name, avatar_url } = this.state.user;
    return (
      <main>
        {this.state.isLoading ? (
          <p>Loading, please wait...</p>
        ) : (
          <div>
            <h1>Name: {name}</h1>
            <h2>username: {username}</h2>
            <p>url: {avatar_url}</p>
          </div>
        )}
      </main>
    );
  }

  componentDidMount() {
    const { username } = this.props;
    api.getUserByUsername(username).then(data => {
      this.setState({ user: data.user, isLoading: false });
    });
  }
}

export default UserByUsername;
