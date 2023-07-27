import React from "react";
import Article from "../components/Article";

function ArticleList({ posts }) {
  return (
    <main>
      {/* Render the Article component for each blog post */}
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
