import React from 'react'

function ChatBody({ messages }) {
    return <div className="chat__body">
        {
            messages && messages.map(message => (
                <p className={`chat_message ${message.received && 'chat__receiver'} `}>
                    <span className="chat__name">
                        {message.name}
                    </span>
                    {message.message}
                    <span className="chat__timestamp">
                        {message.timestamp}
                    </span>
                </p>
            ))
        }
    </div>
}

export default ChatBody
