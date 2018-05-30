import React, { Component } from 'react'


class YesorNo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            awn: {},
        }
        //console.log('called')
        //this.fetchUserData()
    }

    fetchUserData = () => {

        fetch("http://yesno.wtf", {mode: 'no-cors'})
            .then(awn => this.setState({ awn }))
            .then(awn => this.setState({ awn }))
            .catch(error => console.log(error))

            console.log(this.state.awn)
    }

    render() {

        return (
            <div className="yesorno">
                <a href="http://yesno.wtf" target="_blank">Find Your awnser here</a>              
            </div>
        )

    }
}

export default YesorNo