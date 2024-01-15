import '../components/Chat/style.css'

import Sidebar from './Chat/Sidebar'

import Chatter from './Chat/Chatter'

function ChatPage() {
  return (
    <div className='wrapper'>
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

      <div className="chat-main">
        <Sidebar />
        <Chatter />
      </div>
    </div>
  )
}

export default ChatPage
