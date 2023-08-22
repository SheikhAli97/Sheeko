import React from 'react'
import { Link, Route, Routes, Path } from 'react-router-dom'
import ChatPage from './components/ChatPage'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="chat-page" Component={ChatPage} />
        <Route path="register" Component={RegisterPage} />
      </Routes>
    </div>
  )
}
