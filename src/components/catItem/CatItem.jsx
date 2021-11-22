import React from 'react'
import '../../assets/styles/catItem.css'


const CatItem = (props) => { 


    // constructor(props) {
    //     super(props)
    //     const {
    //         name

    //     } = this.props.cat
    // }

        console.log(props.cat)
        const catImage = props.cat.image ? props.cat.image.url : null
        return (
            <div className="CatItem">
                <div className="cat-card-image">
                    <img src={catImage} alt=""/>

                </div>
                <div className="cat-info">
                    <div>{props.cat.name}</div>
                    <div>{props.cat.origin}</div>
                    <div>Temperament: {props.cat.temperament}</div>
                    <div>Description: {props.cat.description}</div>

                </div>
            </div>
        )
}

export default CatItem