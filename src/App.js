import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from 'react-router-dom'

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
const Navbar = () => (
    <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
            <NavLink to='/challenges'>Challenges</NavLink>
        </li>
    </ul>
)

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Navbar />

                    <Routes>
                        <Route exact path='/about' element={About} />
                        <Route exact path='/contact' element={Contact} />
                        <Route exact path='/challenges' element={Challenges} />
                        <Route exact path='/' element={Home} />
                        <Route component={NotFound} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default App

