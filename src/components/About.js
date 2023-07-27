import React from "react";
import logo from "../assets/logo";

function About({ image, about }) {
  // Set a default image URL if no image prop is provided
  const imageUrl = image || "https://via.placeholder.com/215";

  return (
    <div>
      <aside>
        {/* Render the image with alt text */}
        <img src={imageUrl} alt="blog logo" />
      </aside>
      {/* Render the about text */}
      <p>{about}</p>
    </div>
  );
}

export default About;
