import React from "react";
import { Link, Route, Routes, Path } from "react-router-dom";
import ChatPage from "./chatPage";
import RegisterPage from "./registerPage";
import LoginPage from "./LoginPage";

import "../src/css/login.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="chat-page" Component={ChatPage} />
        <Route path="register" Component={RegisterPage} />
      </Routes>
    </div>
  );
}
