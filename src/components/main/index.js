import React from 'react';
import './main.css';

import Header from './header'
import Content from './content'

function Main() {
    return (
        <div className="app">
            <Header/>
            <Content/>
        </div>
    );
}

export default Main;