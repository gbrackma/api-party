import React, { Component } from 'react'

import './Nasa.css'
import { Route, Switch, NavLink } from 'react-router-dom'

class Nasa extends Component {
    render() {

        return (
            <div className="Nasa">
            <h1>NASA</h1>
                <img src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png" alt='nasa' className='logo'/>
                
            </div>
        )

    }
}

export default Nasa