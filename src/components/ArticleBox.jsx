import React from "react";

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
    <div className="articleBox">
      <p className="authorAndCreatedAt">
        author: {author} created at: {created_at}
      </p>
      <h2 className="boxTitle">{title}</h2>
    </div>
  );
};

export default ArticleBox;
