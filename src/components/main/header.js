import React from 'react';
import logo from '../../images/logo.svg';

function Header() {
    return (
        <header className="app-header">
            <img src={logo} className="app-logo" alt="logo"/>
        </header>
    );
}

export default Header;