import React, {Component} from 'react'
import AppMinMax from './inputs/minmax/minmax'
import AppInputLazy from './inputs/lazy/lazy'

/*Причина по которой мы пишем {this.props.message} в фигурных скобках заключается в том, 
что нам нужно сказать JSX, что мы хотим добавить JavaScript выражение. 
Это называется экранированием.*/

export default class extends Component {
    state = {
        inp1: 'start',
        inp2: 'start other'
    }

    render() {
       
        return (
            <div>
                <h2>Lazy input</h2>
                <p>{this.state.inp1}</p>
                <AppInputLazy 
                    nativeProps={{type: 'text', className: 'some'}}
                    value = {this.state.inp1} 
                    onChange = {(e) => this.setState({
                        inp1: e.target.value
                    })}
                />
                <hr/>
                <button onClick={(e) => this.setState({inp1: 'test'})}>Unreal change</button>
            </div>
        )
    }
}