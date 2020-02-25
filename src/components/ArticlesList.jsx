import React from "react";
import ArticleBox from "./ArticleBox";

const ArticlesList = props => {
  console.log(props);
  return (
    <div className="cards-list">
      {props.articles.map(art => {
        return <ArticleBox {...art} key={art.article_id} />;
      })}
    </div>
  );
};

export default ArticlesList;
