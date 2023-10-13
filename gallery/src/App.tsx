import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import GalleryList from "./components/GalleryList";
import GalleryCreate from "./components/GalleryCreate";
import ThemeProviderContext from "./context/ThemeContext";
import { Post } from "./components/types";

function App() {
  const [posts, setPosts] = useState<Post[]>(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handlePostSubmit = (newPost: Post) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <BrowserRouter>
      <ThemeProviderContext>
        <Header />
        <Routes>
          <Route path="" element={<Navigate to="/feed" />} />
          <Route path="/feed" element={<GalleryList posts={posts} />} />
          <Route
            path="/create"
            element={<GalleryCreate onPostSubmit={handlePostSubmit} />}
          />
        </Routes>
      </ThemeProviderContext>
    </BrowserRouter>
  );
}

export default App;
