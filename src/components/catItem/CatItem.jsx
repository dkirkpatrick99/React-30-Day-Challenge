import React from 'react'

class CatItem extends React.Component { 
    constructor(props) {
        super(props)
        const {
            name

        } = this.props.cat
    }

    render () {
        console.log(this.props.cat)
        const catImage = this.props.cat.image ? this.props.cat.image.url : null
        return (
            <div>
                {/* <img src={catImage} alt=""/>
                <div>{this.props.cat.name}</div>
                <div>{this.props.cat.origin}</div>
                <div>Temperament: {this.props.cat.temperament}</div>
                <div>Description: {this.props.cat.description}</div> */}
            </div>
        )
    }
}

export default CatItem