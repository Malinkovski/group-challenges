import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/LoginForm";
import Users from "./components/Users";
import { Header } from "./components/Header";
import { Container } from "./components/Container";

// HEADER
// CONTENT ->
//   1. screen -> login form 
//   2. screen -> search form
// FOOTER

const App = () => {
  const storedUsername = localStorage.getItem("username");
  const [isLoggedOut, setIsLoggedOut] = useState<boolean>(
    storedUsername === null
  );

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
      <Header isLoggedOut={isLoggedOut} handleLogout={handleLogout} />
      <Container>
        {isLoggedOut ? (
          /* LOGIN PAGE */
          <LoginForm isLoggedIn={handleLogin} />
        ) : (
          /* USERS PAGE */
          <Users />
        )}
      </Container>
      {/* footer */}
    </>
  );
};

export default App;
