import React, { Component } from 'react'

import './Github.css'
import { Route, Switch, NavLink } from 'react-router-dom'

class Github extends Component {

    state = {
        username: '',
    }

    handleChange = (ev) =>{
        this.setState({username: ev.target.value})
    }

    handleSubmit = (ev) =>{
        ev.preventDefault()
        this.props.history.push(`/github/${this.state.username}`)
        this.setState({username: ''})
    }
    render() {

        return (
            <div className="Github">
                <img 
                    className="logo"
                    src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
                    alt="GitHub"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text " onChange={this.handleChange} value={this.state.username}/>
                    </div>
                    <div>
                        <button type="submit">Look up GitHub user</button>
                    </div>
                </form>
                <Route exact path="/github" render={() => <h3>Please enter username to search on github</h3>} />
                <Route  path="/github/:username" render={(props) => <h3>you searched for </h3>} />


            </div>
        )

    }
}

export default Github