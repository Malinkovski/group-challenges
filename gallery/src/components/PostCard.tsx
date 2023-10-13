import React from "react";

interface PostCardProps {
  name: string;
  description: string;
  timeAgo: string;
  imageLink: string;
}

const PostCard: React.FC<PostCardProps> = ({
  name,
  description,
  timeAgo,
  imageLink,
}) => {
  return (
    <div className="card">
      <div className="inner-card">
        <p>by: {name}</p>
        <div className="image">
          <img src={imageLink} alt="img" />
        </div>
        <p>{description}</p>
        <p>{timeAgo}</p>
      </div>
    </div>
  );
};

export default PostCard;
