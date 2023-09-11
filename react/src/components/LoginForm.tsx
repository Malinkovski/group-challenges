import React, { useState } from "react";
import Button from "./Button";

interface LoginFormProps {
  isLoggedIn: (username: string) => void;
}

function LoginForm({ isLoggedIn }: LoginFormProps) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit thest");
    isLoggedIn(username);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <form className="text-center m-4" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <Button text="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
