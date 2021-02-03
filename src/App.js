import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './components/sidebar/Sidebar'
import Chat from './components/chat/Chat'
import './App.css';

function App() {
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
