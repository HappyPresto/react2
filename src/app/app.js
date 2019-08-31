import React, {Component} from 'react'
import styles from './app.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from '~s/router'

import {observer} from 'mobx-react'

/*Причина по которой мы пишем {this.props.message} в фигурных скобках заключается в том, 
что нам нужно сказать JSX, что мы хотим добавить JavaScript выражение. 
Это называется экранированием.*/

@observer class App extends Component {

    render() {
        return (
            <div className="container">
                {router.component}
            </div>
        )
    }
}

export default App