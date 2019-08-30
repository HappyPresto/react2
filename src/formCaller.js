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
        phoneInputValue: "",
        validForm: false
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
            else return "inputInvalid"
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

    checkForm = () => {
        let textInput = this.textInput.current.className
        let emailInput = this.emailInput.current.className
        let phoneInput = this.phoneInput.current.className
        if (textInput.indexOf("Invalid") && emailInput.indexOf("Invalid") && phoneInput.indexOf("Invalid") == "-1") {
            this.setState({
                validForm: true
            })
        }
        else {
            this.setState({
                validForm: false
            })
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
                        onBlur = {this.checkForm}
                        ref = {this.textInput}
                
                /></div>
                <div><p>Email</p>
                    <input 
                        type="email"
                        value = {this.state.emailInputValue}
                        onChange = {(e) => this.checkText(e.target.value, "emailInputValue")}
                        className = {this.getClassName("email", "emailInputValue")}
                        onBlur = {this.checkForm}
                        ref = {this.emailInput}
                ></input></div>
                <div>
                    <p>Телефон</p>
                    <input 
                        type="text"
                        value = {this.state.phoneInputValue}
                        onChange = {(e) => this.checkText(e.target.value, "phoneInputValue")}
                        className = {this.getClassName("phone", "phoneInputValue")}
                        onBlur = {this.checkForm}
                        ref = {this.phoneInput}
                ></input></div>
                <Modal 
                    validForm = {this.state.validForm}
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