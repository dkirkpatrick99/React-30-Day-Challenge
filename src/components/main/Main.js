import axios from "axios"
import React, { useState, useEffect, useContext } from 'react'
import '../../assets/styles/main.css'
import CatItem from '../catItem/CatItem.jsx'

const Main = (props) => {
    const [data, setData] = useState([])
    const [currentCats, setCurrentCats] = useState([])
    const [buttonFlag, setButtonFlag] = useState(false)
    let buttons = {}
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: [],
    //         currentCats: [],
    //         buttonFlag: false
    //     }
    //     this.buttons = {}
    //     // const {
    //     //     techs,
    //     //     greetPeople,
    //     //     handleTime,
    //     //     loggedIn,
    //     //     handleLogin,
    //     //     message,
    //     // } = this.props
    //     this.getCatButtons = this.getCatButtons.bind(this)
    //     this.getCatsFromRegion = this.getCatsFromRegion.bind(this)

    // }

    useEffect(() => {
        getAllCats()
        debugger
    },[])

    // componentDidMount(){
    //     this.getAllCats()
    // }


    const getCatsFromRegion = (e) => {
        let region = e.target.innerText !== 'All' ? e.target.innerText.split(`:`)[0] : 'All'
        let cats = region !== "All" ? data.filter(cat => cat.origin === region)
            : data
        setCurrentCats(cats)

    }

    const getAllCats = async () => {
        const url = 'https://api.thecatapi.com/v1/breeds'
        try {
            const response = await axios.get(url)
            const data = await response.data
                setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getCatButtons = () => {
        if (data.length !== 0) {
            buttons = {}
            data.forEach(cat => {
                if (buttons[cat.origin]) {
                    buttons[cat.origin] = buttons[cat.origin] + 1
                } else {
                    buttons[cat.origin] = 1
                }
            })
        }
    }

    // render() {
        getCatButtons()
        const current = currentCats.length !== 0 ? currentCats : data
        const catItems = current.map(cat => {
           return( <CatItem cat={cat} />)
        })
        const selectionButtons = Object.keys(buttons).map(place => {
            return(
                <button onClick={getCatsFromRegion}>{place}:({buttons[place]})</button>
            )
        })
        
        return (
            <main>
                <ul>
                    {selectionButtons}
                    <button onClick={getCatsFromRegion}>All</button>

                </ul>
                <ul className="cat-items-list">
                    {catItems}
                </ul>
            </main>
        )
    // }
}

export default Main