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
            name: "Yone",
            timestamp: "50 minutes",
            received: false
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
