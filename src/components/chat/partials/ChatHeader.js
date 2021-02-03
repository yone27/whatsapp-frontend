import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { MoreVert, SearchOutlined } from '@material-ui/icons'

function ChatHeader() {
    return <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
            <h3>room name</h3>
            <p>
                last seen 2:35
                </p>
        </div>
        <div className="chat__headerRight">
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        </div>
    </div>
}

export default ChatHeader
