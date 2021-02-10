import React, { useState } from 'react'
import { IconButton, Button } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import ArrowBack from '@material-ui/icons/ArrowBack'
import PersonAdd from '@material-ui/icons/PersonAdd'
import TextField from '@material-ui/core/TextField';

import SidebarChat from './partials/SidebarChat'
import { useStateValue } from "../../data/StateProvider";
import './AddRoom.css';
import axios from '../../axios'

function AddRoom({ toggleRoom }) {
    const [{ user, rooms }] = useStateValue();

    const [dataRoom, setDataRoom] = useState({
        phone: '',
        name: '',
        creatorId: user.id
    })
    const [notdata, setNotdata] = useState(true)
    const [formView, setFormView] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/rooms/add', dataRoom)

            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const handleState = e => {
        setDataRoom({
            ...dataRoom,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            {
                !formView ? (
                    <>
                        <div className="addRoom">
                            <IconButton onClick={toggleRoom}>
                                <ArrowBack />
                            </IconButton>
                            Nuevo chat
                        </div>
                        <div className="sidebar__search">
                            <div className="sidebar__searchContainer">
                                <SearchOutlined />
                                <input type="text" placeholder="Search or start new chat" />
                            </div>
                        </div>
                        <div className="addRoom__chats">
                            <div className="addRoom__create" onClick={() => setFormView(true)}>
                                <IconButton>
                                    <PersonAdd />
                                </IconButton>
                                        Nuevo contacto
                                    </div>
                            {
                                rooms ? rooms.map(roomItem => (
                                    <SidebarChat roomItem={roomItem} key={roomItem._id} />
                                ))
                                    : (
                                        <p>No tienes amigos brou</p>
                                    )
                            }
                        </div>
                    </>
                ) : (
                        <div className="addRoom">
                            <div className="addRoom__header">
                                <IconButton onClick={() => setFormView(false)}>
                                    <ArrowBack />
                                </IconButton>
                                    Nuevo contacto
                            </div>
                            <form className="addRoom__form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <TextField required name="name" label="Nombre" onChange={handleState} />
                                </div>
                                <div className="form-group">
                                    <TextField required name="phone" label="Telefono" onChange={handleState} />
                                </div>
                                <div className="form-group">
                                    <Button variant="contained" type="submit">Guardar</Button>
                                </div>
                            </form>
                        </div>
                    )
            }
        </>
    )
}

export default AddRoom
