import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "../components/ArticleList";

function App() {
  return (
    <div className="App">
      {/* Render the Header component with the blog name */}
      <Header name="Underreacted" />

      {/* Render the About component with an about text */}
      <About about="About this blog" />

      {/* Render the ArticleList component with blog posts */}
      <ArticleList
        posts={[
          {
            id: 1,
            title: "Components 101",
            date: "December 15, 2020",
            preview: "Setting up the building blocks of your site",
          },
          {
            id: 2,
            title: "React Data Flow",
            date: "December 11, 2020",
            preview: "Passing props is never passé",
          },
          {
            id: 3,
            title: "Function Components vs Class Components",
            date: "December 10, 2020",
            preview: "React, meet OOJS.",
          },
        ]}
      />
    </div>
  );
}

export default App;
