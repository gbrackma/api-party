import React, { Component } from 'react'

import './TheBestApi.css'

class TheBestApi extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dog: {},
        }
        this.fetchUserData()
    }

    /*componentWillReceiveProps(nextProps) {
        const locationChange = nextProps.location !== this.props.location
        if (locationChange) {
            this.fetchUserData(nextProps)
        }
    }*/

    fetchUserData = () => {

        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(dog => this.setState({dog}))
            .catch(error => console.log('error'))
    }

    render() {

        const {dog} = this.state
        return (
            <div className="dog">
                <img src={dog.message} alt="" />
                <button onClick={() => this.fetchUserData()}>New Pup Please!</button>
            </div>
        )

    }

}

export default TheBestApi