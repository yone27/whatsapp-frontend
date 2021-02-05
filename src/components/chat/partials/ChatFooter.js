import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic } from '@material-ui/icons'
import axios from '../../../axios'

function ChatFooter() {
    const [input, setInput] = useState("")

    const sendMessage = async e => {
        e.preventDefault()
        await axios.post('/messages/new', {
            message: input,
            timestamp: "50 minutes",
            author: "601d7d92ca90643128bfa8aa",
            roomId: "601d7eda66c93f20d04ec326"
        })
    }

    return <div className="chat__footer">
        <IconButton>
            <InsertEmoticon />
        </IconButton>
        <IconButton>
            <AttachFile />
        </IconButton>
        <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" />
            <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <IconButton>
            <Mic />
        </IconButton>
    </div>
}

export default ChatFooter
