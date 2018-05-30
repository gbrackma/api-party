import React, { Component } from 'react'

//import './Github.css'

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
            <div className="GithubUser">
                <img src={dog.message} alt="" />
            </div>
        )

    }

}

export default TheBestApi