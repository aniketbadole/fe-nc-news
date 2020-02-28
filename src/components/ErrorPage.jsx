import React, { Component } from "react";
import image from "../error.png";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <h1>Error :(</h1>
        <img src={image} alt="404 Error" />
      </div>
    );
  }
}

export default ErrorPage;
