import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  render() {
    const { topics } = this.state;
    return (
      <main>
        <h1>Topics</h1>
        {this.state.isLoading ? (
          <p>Loading, please wait...</p>
        ) : (
          topics.map(topic => {
            return (
              <div key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>
                  <h2>{topic.slug}</h2>
                </Link>
                <p>{topic.description}</p>
              </div>
            );
          })
        )}
      </main>
    );
  }

  componentDidMount() {
    api.getTopics().then(data => {
      this.setState({ topics: data.topics, isLoading: false });
    });
  }
}

export default Topics;
