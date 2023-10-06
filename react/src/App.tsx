import { useState } from "react";
import Button from "./components/Button";
import Posts from "./components/Posts";
import Albums from "./components/Albums";
import Comments from "./components/Comments";
import "./App.css";

type LOCAL = "albums" | "posts" | "comments";

const App = () => {
  const [showComponent, setShowComponent] = useState<LOCAL>("comments");

  return (
    <div className="App">
      <div className="button-wrapper">
        <Button
          title="Albums"
          onClick={() => setShowComponent("albums")}
          isActive={showComponent === "albums"}
        />
        <Button
          title="Posts"
          onClick={() => setShowComponent("posts")}
          isActive={showComponent === "posts"}
        />
        <Button
          title="Comments"
          onClick={() => setShowComponent("comments")}
          isActive={showComponent === "comments"}
        />
      </div>

      {showComponent === "albums" && <Albums url={showComponent} />}
      {showComponent === "posts" && <Posts url={showComponent} />}
      {showComponent === "comments" && <Comments url={showComponent} />}
    </div>
  );
};

export default App;
