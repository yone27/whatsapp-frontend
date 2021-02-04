import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Pusher from 'pusher-js'

import Sidebar from './components/sidebar/Sidebar'
import Chat from './components/chat/Chat'
import axios from './axios'
import './App.css';

function App() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axios.get('/messages/sync')
                setMessages(res.data)
                
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchAllData()
    }, [])

    // useEffect(() => {
    //     const pusher = new Pusher('2e7998c3dd19bb8eff12', {
    //         cluster: 'us2'
    //     });

    //     const channel = pusher.subscribe('messages');
    //     channel.bind('inserted', newMessage => {
    //         setMessages([...messages, newMessage])
    //     });

    //     return () => {
    //         channel.unbind_all()
    //         channel.unsubscribe()
    //     }
    // }, [messages])

    console.log(messages)
    return (
        <div className="app">
            <div className="app__body">
                <Router>
                    <Sidebar />
                    <Switch>
                        {/* <Route path="/rooms/:roomId">
                            <Chat messages={messages} />
                        </Route> */}
                        <Route path="/">
                            <Chat messages={messages} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
