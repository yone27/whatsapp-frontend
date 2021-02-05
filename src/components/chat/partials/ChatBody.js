import React from 'react'

function ChatBody() {
    return <div className="chat__body">
        {/* <p className={`chat_message ${message.received && 'chat__receiver'} `}> */}
        <p className={`chat_message 'chat__receiver'} `}>
            <span className="chat__name">
                message.author
            </span>
            message.message
            <span className="chat__timestamp">
                message.timestamp
            </span>
        </p>
    </div>
}

export default ChatBody
