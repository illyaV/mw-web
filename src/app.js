import React from 'react'

import './styles/reset.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Main from './components/main'

function App() {
    return (
        <Router>
            <Route component={Main}/>
        </Router>
    )
}

export default App