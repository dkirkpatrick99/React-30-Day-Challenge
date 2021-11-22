import axios from "axios"
import React from 'react'
import CatItem from '../catItem/CatItem.jsx'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        // const {
        //     techs,
        //     greetPeople,
        //     handleTime,
        //     loggedIn,
        //     handleLogin,
        //     message,
        // } = this.props
    }

    componentDidMount(){
        const url = 'https://api.thecatapi.com/v1/breeds'
        axios.get(url)
            .then(response => {
                this.setState({data: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const catItems = this.state.data.map(cat => {
           return( <CatItem cat={cat} />)
        })
        
        return (
            <main>
                hello
                <ul>
                    {catItems}
                </ul>
            </main>
        )
    }
}

export default Main