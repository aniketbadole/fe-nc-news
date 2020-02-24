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
          <Link to="/">Topics </Link>
        </li>
        <li>
          <Link to="/">Something else </Link>
        </li>
        <button>Login</button>
      </ol>
    </nav>
  );
};

export default Nav;
