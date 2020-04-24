import React from 'react';
import logo from '../../images/friend-request.png'
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/friendlist">FriendList</a>
                <a href="/friendsuggestion">friendSuggestion</a>
                <a href="settings">Settings</a>
            </nav>
        </div>
    );
};

export default Header;