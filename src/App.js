import React from "react";
import HomePage from "./pages/Home/home";
import "./App.scss";
import PostLogin from "./pages/Post-Login";
import Profile from "./pages/Home/Profile";

function App() {
  return (
    <div className="App">
      <main>
        <HomePage />
        <Profile />
        <PostLogin />
      </main>
    </div>
  );
}

export default App;
