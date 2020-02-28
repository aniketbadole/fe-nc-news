import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/topics">Topics </Link>
        </li>
        <li>
          <Link to="/">Users </Link>
        </li>
        <button>Hello, jessjelly</button>
      </ol>
    </nav>
  );
};

export default Nav;
