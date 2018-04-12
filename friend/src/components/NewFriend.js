import React, { Component } from 'react';
import axios from 'axios';

import './NewFriend.css';
export default class NewFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends: response.data });
        })
        .catch(error => {
            console.error(`Server Error: ${error}`);
        });
    }
    
    render() {
        return (
            <div className="newFriend">
                <form className="form">
                    <p className="addFriend"><b>New Friend</b></p>
                    <p><input class="box" type="text" name="name" placeholder="Name" /></p>
                    <p><input class="box" type="number" name="age" placeholder="Age" /></p>
                    <p><input class="box" type="text" name="email" placeholder="E-mail" /></p>
                    <p><button class="button">Add New Friend</button></p>
                </form>
            </div>
        )
    }
}