import React, { Component } from 'react'

import './GithubUser.css'
import { Route, Switch, NavLink } from 'react-router-dom'

class GithubUser extends Component {

    constructor(props){
        super(props)

        this.state = {
            user: {},
        }
        this.fetchUserData()
    }

    componentWillReceiveProps(nextProps){
        const locationChange = nextProps.location !== this.props.location
        if(locationChange){
            this.fetchUserData(nextProps)
        }
    }

    fetchUserData = (props) => {

        fetch(`https://api.github.com/users/${props.match.params.username}`)
        .then(response => response.json())
        .then(user => this.setState({user}) )
        .catch(error => console.log(error))
    }

    render() {

        return (
            <div className="GithubUser">
                <h1>Githib User: {this.props.match.params.username}</h1>
                <img src={this.user.avatar_url} alt=""/>


            </div>
        )

    }
}

export default GithubUser