import React from "react";
import ArticleBox from "./ArticleBox";
// import { Link } from "@reach/router";

const ArticlesList = props => {
  console.log(props);
  return (
    <div>
      {props.articles.map(art => {
        return <ArticleBox {...art} key={art.article_id} />;
      })}
    </div>
  );
};

export default ArticlesList;
