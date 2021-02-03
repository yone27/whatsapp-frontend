import React from 'react'

function ChatBody() {
    return <div className="chat__body">
        <p className={`chat_message chat__receiver`}>
            <span className="chat__name">
                message.name
        </span>
        message.message
        <span className="chat__timestamp">
                12:30
        </span>
        </p>
        <p className={`chat_message`}>
            <span className="chat__name">
                message.name
        </span>
        message.message
        <span className="chat__timestamp">
                12:30
        </span>
        </p>
    </div>
}

export default ChatBody
