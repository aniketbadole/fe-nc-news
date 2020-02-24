import React from "react";

const ArticleBox = ({ title, body, topic, author, created_at }) => {
  return (
    <div className="articleBox">
      <p className="authorAndCreatedAt">
        author: {author} created at: {created_at}
      </p>
      <h2 className="boxTitle">{title}</h2>
      <p className="boxSummary">{body}</p>
      <h4>Topic: {topic}</h4>
    </div>
  );
};

export default ArticleBox;
