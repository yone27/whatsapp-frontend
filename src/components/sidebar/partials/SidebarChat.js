import React from 'react'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './SidebarChat.css'

function SidebarChat({ roomItem }) {
    return <Link to={`/rooms/${roomItem._id}`}>
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3>{roomItem.name}</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </Link>
}

export default SidebarChat
