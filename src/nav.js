import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                </ul>
            </nav>
        )
    }
}
