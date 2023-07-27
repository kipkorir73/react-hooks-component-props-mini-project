import React from "react";

function Article({ title, date, preview }) {
  // Set a default date if no date prop is provided
  const formattedDate = date || "January 1, 1970";

  return (
    <article>
      {/* Render the title */}
      <h3>{title}</h3>
      {/* Render the date */}
      <small>{formattedDate}</small>
      {/* Render the preview text */}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
