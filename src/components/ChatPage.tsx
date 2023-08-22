import { useState } from 'react'
import '../css/style.css'
import imageOne from '../assets/img/chat1.jpg'
import imageTwo from '../assets/img/chat2.jpg'
import imageThree from '../assets/img/chat3.jpg'
import imageFour from '../assets/img/chat4.jpg'
import mediaOne from '../assets/img/media1.jpg'
import mediaTwo from '../assets/img/media2.jpg'
import mediaThree from '../assets/img/media3.jpg'
import messageOne from '../assets/img/message1.jpg'
import Sidebar from './Chatter/Sidebar'
import Chat from './Chatter/Chatter'
import Chatter from './Chatter/Chatter'

function ChatPage() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Chat App Dashboard</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />

      <main className="chat-main">
        <Sidebar />
        <Chatter />
      </main>
    </div>
  )
}

export default ChatPage
