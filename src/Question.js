import React, { Component } from 'react'

import './Question.css'
import { Route } from 'react-router-dom'
import YesorNo from './YesorNo'

class Question extends Component {

    constructor(props) {
        super(props)

        this.state = {
            question: '',
        }
    }

    handleChange = (ev) =>{
        this.setState({question: ev.target.value})
    }

    handleSubmit = (ev) =>{
        ev.preventDefault()
        //this.props.history.push(`/questions/${this.state.question}`)
        this.setState({question: ''})
    }

    render() {

        const { awn } = this.state
        return (
            <div className="question">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text " onChange={this.handleChange} value={this.state.question} />
                    </div>
                    <div>
                        <a href="http://yesno.wtf" target="_blank">Find Your awnser here</a>
                        {/* <button type="submit" href="http://yesno.wtf">Anwser my question!</button> */}
                    </div>
                </form>
                {/*<Route path="/questions/:question" component={YesorNo}>*/}
            </div>
        )

    }

}

export default Question