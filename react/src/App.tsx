import React, { ChangeEvent, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import LoginForm from "./components/LoginForm";
import Users from "./components/Users";

const App = () => {
  const storedUsername = localStorage.getItem("username");
  const [isLoggedOut, setIsLoggedOut] = useState(storedUsername === null);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setIsLoggedOut(true);
  };

  const handleLogin = (username: string) => {
    localStorage.setItem("username", username);
    setIsLoggedOut(false);
  };

  return (
    <>
      <header className="text-right bg-light p-2">
        {!isLoggedOut && <Button text="LOGOUT" onClick={handleLogout} />}
      </header>

      {isLoggedOut ? (
        /* LOGIN PAGE */
        <section className="container">
          <LoginForm isLoggedIn={handleLogin} />
        </section>
      ) : (
        /* USERS PAGE */
        <section className="container">
          <Users />
        </section>
      )}
    </>
  );
};

export default App;
