import React from "react";
import PostCard from "./PostCard";

const GalleryList = () => {
  const posts = Array(6).fill(null);

  return (
    <div className="gallery-container">
      {posts.map((_, index) => (
        <PostCard
          key={index}
          name={`Random User ${index + 1}`}
          description={`Some randome description from a user.`}
          timeAgo={`posted  ${index + 1}`}
          imageLink={`https://picsum.photos/id/${index + 50}/300/400`}
        />
      ))}
    </div>
  );
}

export default GalleryList;
