import React from 'react'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

import './SidebarChat.css'
function SidebarChat({id, addNewChat, name }) {

    const createChat = () => {
        const roomName = prompt("Please enter name for chat")
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar/>
                <div className="sidebarChat__info">
                    <h3>{name}</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h3>Add new chat</h3>
            </div>
        )
}

export default SidebarChat
