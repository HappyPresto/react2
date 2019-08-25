import React, {Component} from 'react'

class CartCounter extends Component {
    state = {
        current: 0
    }

    render() {
        return (
            <div>
                <button onClick = {this.minus}>-</button>
                <span> {this.state.current} </span>
                <button onClick = {this.plus}>+</button>
            </div>
        )
    }

    minus = () => {
        this.setState({
            num: this.state.current - 1
        })
    }

    plus = () => {
        this.setState({
            num: this.state.current + 1
        })
    }
}

export default CartCounter