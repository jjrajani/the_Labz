import React from 'react';
// Components
import FriendList from './components/FriendList';
import { Link } from 'react-router-dom';

const Friends = () =>
    <div className="friends">
        <div className="header">
            <h3>Friends</h3>
        </div>
        <FriendList />
    </div>;

export default Friends;
