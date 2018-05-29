import React, { Component } from 'react'

import './GithubUser.css'
import { Route, Switch, NavLink } from 'react-router-dom'

class GithubUser extends Component {

    fetchUserData = () => {

        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
        .then(response => response.json())
        .then(user => console.log(user))
        .catch(error => console.log(error))
    }

    render() {

        return (
            <div className="GithubUser">
                <h1>Githib User: {this.props.match.params.username}</h1>
            </div>
        )

    }
}

export default GithubUser