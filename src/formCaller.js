import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AppLazyInput from './inputs/lazy/lazy'

class FormCaller extends Component {
    static defaultProps = {

    }

    static propTypes = {
        buyProduct: PropTypes.array,
        total: PropTypes.number
    }

    onChange() {
        console.log("success")
    }

    render() {
        console.log( this.props)
        return (
            <div>
                {this.props.buyProduct}
                {this.props.total}
                <AppLazyInput
                    nativeProps={{type: 'text'}}
                    value = {1}
                    onChange = {this.onChange}
                />
                <div><input

                ></input></div>
                <div><input

                ></input></div>
                <div><input

                ></input></div>
                <button>Send</button>
            </div>
        )
    }
}

export default FormCaller