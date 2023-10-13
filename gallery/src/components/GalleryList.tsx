import React from "react";
import PostCard from "./PostCard";
import { Post } from "./types";
import { formatDistanceToNow, subHours } from 'date-fns';

interface GalleryListProps {
  posts: Post[];
}

const GalleryList = ({ posts }: GalleryListProps) => {
  const dummyPosts = Array(6).fill(null);

  return (
    <div className="gallery-container">
      {dummyPosts.map((_, index) => (
        <PostCard
          key={index}
          title={`Some generic post for the user`}
          user={`User ${index + 1}`}
          description={`Some randome description from a user.`}
          createdAt={formatDistanceToNow(subHours(new Date(), 16), { addSuffix: true })}
          imageLink={`https://picsum.photos/id/${index + 50}/300/400`}
        />
      ))}
      
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          user={post.user}
          description={post.description}
          createdAt={formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          imageLink={post.imageLink}
        />
      ))}
    </div>

  );
}

export default GalleryList;
