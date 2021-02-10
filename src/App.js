import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Pusher from 'pusher-js'

import Sidebar from './components/sidebar/Sidebar'
import Chat from './components/chat/Chat'
import axios from './axios'
import './App.css';
import { useStateValue } from "./data/StateProvider";

function App() {
    // const [messages, setMessages] = useState([])
    const [{ rooms }, dispatch] = useStateValue();

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axios.get('/rooms')

                dispatch({
                    type: 'SET_ROOMS',
                    rooms: res.data,
                })
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

    console.log(rooms)
    return (
        <div className="app">
            <div className="app__body">
                <Router>
                    <Sidebar />
                    <Switch>
                        <Route path="/rooms/:roomId">
                            <Chat />
                        </Route>
                        <Route path="/">
                            <Chat />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
