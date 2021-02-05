import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'

import './Sidebar.css';
import SidebarChat from './partials/SidebarChat'
import { useStateValue } from "../../data/StateProvider";

function Sidebar() {
    const [{ rooms }] = useStateValue();
    console.log(rooms)
    const createChat = () => {
        const roomName = prompt("Please Enter Name for Chat");

        if (roomName) {
            console.log(roomName)
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon onClick={createChat} />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat name='mi name' id='mi id' />
            </div>
        </div>
    )
}

export default Sidebar
