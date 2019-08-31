import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component{
    static defaultProps = {
        onChange: function(e) {},
        nativeProps: {}
    }

    static propTypes = {
        value: PropTypes.any.isRequired,
        onChange: PropTypes.func,
        nativeProps: PropTypes.object
    }

    nativeInput = React.createRef() // сделай ссылку на что либо

    // static getDerivedStateFromProps - сделан специально, что бы state пересчитать из входных параметров (не жел-но юзать)

    setValue(value) {
        this.nativeInput.current.value - value
    }

    checkChange = (e) => {
        if (this.props.value.toString() !== e.target.value) {
            this.props.onChange(e)
        }
    }

    checkEnterKey = (e) => {
        if(e.keyCode === 13){
            this.checkChange(e)
        }
    }

    render(){
        return (
            <input {...this.props.nativeProps}
                defaultValue = {this.props.value}
                onBlur = {this.checkChange}
                onKeyUp = {this.checkEnterKey}
                ref = {this.nativeInput}
            />
        );
    }
}

/*
Some.defaultProps = {
    min: 1,
    max: 5
};
*/
