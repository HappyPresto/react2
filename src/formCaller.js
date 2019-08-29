import React, {Component, useState} from 'react'
import PropTypes from 'prop-types'
import Modal from './modalBootstrap'

class FormCaller extends Component {
    static defaultProps = {

    }

    static propTypes = {
        buyProduct: PropTypes.array,
        total: PropTypes.number
    }

    state = {
        textInputValue: "",
        emailInputValue: "",
        phoneInputValue: ""
    }

    textInput = React.createRef()
    emailInput = React.createRef()
    phoneInput = React.createRef()

    checkText = (newValue, name) => {
        this.setState({
            [name]: newValue
        })
    }

    getClassName = (type, name) => {
        if (type == "text") {
            if (this.state[name].length > 2 && this.state[name].length < 20) {
                return "inputValid"
            }
            else return "invalidInput"
        }
        else if (type == "email") {
            let reg = /\w{2,20}@[a-z]{2,10}.[a-z]{2,4}/
            if (reg.test(this.state[name])) {
                return "emailValid"
            }
            return "emailInvalid"
        }
        else if (type == "phone") {
            let reg = /^(\+)?([7?8])\d{10}$/
            if (reg.test(this.state[name])) {
                return "phoneValid"
            }
            return "phoneInvalid"
        }
    }

    render() {
        return (
            <div>
                <div>
                    <p>Имя</p>
                    <input 
                        type = "text"
                        value = {this.state.textInputValue}
                        onChange = {(e) => this.checkText(e.target.value, "textInputValue")}
                        className = {this.getClassName("text", "textInputValue")}
                        ref = {this.textInput}
                
                /></div>
                <div><p>Email</p>
                    <input 
                        type="email"
                        value = {this.state.emailInputValue}
                        onChange = {(e) => this.checkText(e.target.value, "emailInputValue")}
                        className = {this.getClassName("email", "emailInputValue")}
                        ref = {this.emailInput}
                ></input></div>
                <div>
                    <p>Телефон</p>
                    <input 
                        type="text"
                        value = {this.state.phoneInputValue}
                        onChange = {(e) => this.checkText(e.target.value, "phoneInputValue")}
                        className = {this.getClassName("phone", "phoneInputValue")}
                        ref = {this.phoneInput}
                ></input></div>
                <Modal 
                    buyProduct = {this.props.buyProduct}
                    total = {this.props.total}
                    name = {this.state.textInputValue}
                    email = {this.state.emailInputValue}
                    phone = {this.state.phoneInputValue}
                />
            </div>
        )
    }
}

export default FormCaller