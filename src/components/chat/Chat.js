import React from 'react'

import './Chat.css'
import ChatHeader from './partials/ChatHeader'
import ChatBody from './partials/ChatBody'
import ChatFooter from './partials/ChatFooter'

function Chat() {
    return <div className="chat">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
    </div>
}

export default Chat
