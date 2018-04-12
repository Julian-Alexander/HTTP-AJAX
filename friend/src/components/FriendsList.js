import React, { Component } from 'react';
import axios from 'axios';

import './FriendsList.css';
import NewFriend from './NewFriend';

export default class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data });    
        })
        .catch(error => {
            console.error(`Server Error: ${error}`);
        });
    }

    render() {
    
        return (
            <div className="container">
                <NewFriend />
                    {this.state.friends.map(friend => (
                    <div className="friend">
                    <div className="friendName">
                        <h3 className="fName">{friend.name}</h3>
                    </div>
                    <h3 className="friendAge">Age: {friend.age}</h3>
                    <h3 className="friendEmail">Email: {friend.email}</h3>
                    </div>
                ))}
            </div>
        )

    }
};