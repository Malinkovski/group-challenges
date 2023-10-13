import React, { useState, useEffect } from "react";
import { Post } from "./types";

interface GalleryCreateProps {
  onPostSubmit: (post: Post) => void;
} 

interface User {
    id: number;
    name: string;
  }
  
  

const GalleryCreate = ({ onPostSubmit }: GalleryCreateProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [selectedUser, setSelectedUser] = useState<number>(-1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title && description && imageLink && selectedUser !== -1) {

      const selectedUserObject = users.find(user => user.id === selectedUser);
      const selectedUserName = selectedUserObject ? selectedUserObject.name : "";
        console.log(selectedUserName)
      const newPost: Post = {
        title,
        description,
        user: selectedUserName,
        createdAt: new Date().toISOString(),
        imageLink,
      };
      onPostSubmit(newPost);

      setTitle("");
      setDescription("");
      setImageLink("");
      setSelectedUser(-1);
    } else {
      alert("All fields must be populated to add a new post");
    }
  };

  return (
    <section className="gallery-create">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Post Title:</label>
          <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Post Description:</label>
          <input type="text" id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
        </div>
        <div>
          <label htmlFor="person">User:</label>
          <select id="person" value={selectedUser} onChange={(event) => setSelectedUser(parseInt(event.target.value))}>
            <option value={-1}>Select a user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="imageLink">Image URL:</label>
          <input type="text" id="imageLink" value={imageLink} onChange={(event) => setImageLink(event.target.value)} />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </section>
  );
};

export default GalleryCreate;
