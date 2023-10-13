import React from "react";
import { Post } from "./types";

const PostCard = ({
  title,
  description,
  createdAt,
  imageLink,
  user,
}: Post) => {

  return (
    <div className="card">
      <div className="inner-card">
        <h2>{title}</h2>
        <p>by: {user}</p>
        <div className="image">
          <img src={imageLink} alt="img" />
        </div>
        <p>{description}</p>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default PostCard;
