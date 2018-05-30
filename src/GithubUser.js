import React, { Component } from 'react'

import './GithubUser.css'
import { Route, Switch, NavLink } from 'react-router-dom'

class GithubUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {},
        }
        this.fetchUserData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        const locationChange = nextProps.location !== this.props.location
        if (locationChange) {
            this.fetchUserData(nextProps)
        }
    }

    fetchUserData = (props) => {

        fetch(`https://api.github.com/users/${props.match.params.username}`)
            .then(response => response.json())
            .then(user => this.setState({ user }))
            .catch(error => console.log(error))
    }

    render() {

        const {user} = this.state
        return (
            <div className="GithubUser">
                <img src={user.avatar_url} alt="" />
                <h2>{user.login}</h2>
                <h3>followers: {user.followers}</h3>
                <h3>following: {user.following}</h3>
                <h3>location: {user.location}</h3>
                <a href={user.html_url} target="_blank">{user.login}'s profile</a>
            </div>
        )

    }
}

export default GithubUser