import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'

import './Sidebar.css';
import SidebarChat from './partials/SidebarChat'
import AddRoom from './AddRoom'
import { useStateValue } from "../../data/StateProvider";

function Sidebar() {
    const [addrooms, setaddrooms] = useState(false)
    const [{ rooms }] = useStateValue();

    const toggleRoom = () => {
        setaddrooms(!addrooms)
    }

    const createChat = () => {
        const roomName = prompt("Please Enter Name for Chat");
        if (roomName) {
            console.log(roomName)
        }
    };

    return (
        <>
            {
                !addrooms ? (
                    <div className="sidebar">
                        <div className="sidebar__header">
                            <Avatar />
                            <div className="sidebar__headerRight">
                                <IconButton>
                                    <DonutLargeIcon />
                                </IconButton>
                                <IconButton onClick={toggleRoom}>
                                    <ChatIcon />
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
                            {
                                rooms ? rooms.map(roomItem => (
                                    <SidebarChat roomItem={roomItem} key={roomItem._id} />
                                ))
                                : (
                                    <p>No tienes amigos brou</p>
                                )
                            }
                        </div>
                    </div>
                ) : (
                        <div className="sidebar">
                            <AddRoom toggleRoom={toggleRoom} />
                        </div>
                    )
            }
        </>
    )
}

export default Sidebar
