import React, {Component} from 'react'

export default class CounterClass extends Component {
    /*constructor() {
        // если наследуется один класс от другого, обязательно нужно вызвать супер, 
        // т.е. конструктор родительского класса
        // bind возвращает эту же самую функцию, но у нее контекст навечно привязан к контексту, который передали
        // this.increase = this.increase.bind(this)
    }*/

    state = {
        cnt: 0
    }

    render() {
        return (
            <div>
                <strong>{this.state.cnt}</strong>
                <br/>
                <button onClick={this.increase}>Plus 1</button> {/* () => this.increase() */}
            </div>
        )
    }

    increase = () => {
        this.setState({
            cnt: this.state.cnt + 1
        })
    }
}