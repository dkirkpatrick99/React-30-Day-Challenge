import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import moment from 'moment'
import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
    TiSocialTwitterCircular,
} from 'react-icons/ti'

const Footer = () => (
    <footer>
        <h3>30 Days Of React</h3>
        <div>
            <TiSocialLinkedinCircular />
            <TiSocialGithubCircular />
            <TiSocialTwitterCircular />
        </div>
        <div>
            <small> Copyright &copy; {new Date().getFullYear()} </small>
        </div>
    </footer>
)


class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>How to use moment</h1>
                <p>This challenge was started {moment('2020-10-01').fromNow()}</p>
                <p>The challenge will be over in {moment('2020-10-30').fromNow()}</p>
                <p>Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
            </div>
        )
    }
}



export default App

