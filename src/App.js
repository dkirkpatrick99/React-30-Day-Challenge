import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from 'react-router-dom'

import Header from './components/header/Header'
import Main from './components/main/Main'

// Home component
const Home = <h1>Welcome Home</h1>
// About component
const About = <h1>About Us</h1>
// Contact component
const Contact = <h1>Contact us</h1>
// Challenge component
const Challenges = (
    <div>
        <h1>30 Days Of React Challenge</h1>
    </div>
)
const NotFound = <h1>The page your looking for not found</h1>


class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Header />

                    <Routes>
                        {/* <Route exact path='/about' element={About} />
                        <Route exact path='/contact' element={Contact} />
                        <Route exact path='/challenges' element={Challenges} /> */}
                        <Route exact path='/' element={<Main />} />
                        {/* <Route component={NotFound} /> */}
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default App

