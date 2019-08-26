import React, {Component} from 'react'
import PropTypes from 'prop-types'

const limit = {
    min: 1,
    max: 10
}

class CartCounter extends Component {
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    }

    static defaultProps = {
        min: 1,
        max: 5
    }

    state = {
        cnt: this.props.min,
        inputValue: this.props.min
    }

    render() {
        return (
            <div>
                <button onClick = {this.decrease}>-</button>
                <span> {this.state.inputValue} </span>
                <input 
                    value = {this.state.inputValue} 
                    onChange = {(e) => this.setValue(e.target.value)}
                    onBlur = {this.applyValue}
                />
                <button onClick = {this.increase}>+</button>
            </div>
        )
    }

    increase = () => {
        this.set(this.state.cnt + 1)
    }

    decrease = () => {
        this.set(this.state.cnt - 1)
    }

    set(newCnt) {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max)
        this.setState({
            cnt: cnt,
            inputValue: cnt
        })
    }

    applyValue() {
        let cnt = parseInt(this.state.inputValue)
        this.set(isNaN(cnt) ? this.props.min : cnt)
    }

    setValue(newStr) {
        /*let cnt = parseInt(newStr)
        if (isNaN(cnt)) {
            cnt = this.props.min
        }
        this.set(cnt)*/
        this.setState({inputValue: newStr})
    }
    
    /*handleChange = (type) => () => {
        if ((this.state.current < limit["min"]) || (this.state.current > limit["max"])) return
        if (type == "min") {
            this.setState({
                current: this.state.current - 1
            })
        }
        else if (type == "max") {
            this.setState({
                current: this.state.current + 1
            })
        }
    }

    handleClass = () => {
        this.className = ""
        if ((this.state.current >= limit["min"]) && (this.state.current <= limit["max"])) {
            return (
                "correct"
            )
        }
    }*/

}

export default CartCounter