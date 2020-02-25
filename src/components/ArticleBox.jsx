import React from "react";
import { Link } from "@reach/router";

const ArticleBox = ({
  article_id,
  author,
  body,
  comment_count,
  created_at,
  title,
  topic,
  votes
}) => {
  return (
    <Link to={`/articles/${article_id}`}>
      <div className="card">
        <p className="author-card">{author}</p>
        <h2 className="title-black">{title}</h2>
      </div>
    </Link>
  );
};

export default ArticleBox;
