import React from "react";

function Header({ name }) {
  return (
    <header>
      {/* Render the blog name */}
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
