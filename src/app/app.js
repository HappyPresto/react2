import React, {Component} from 'react'
import styles from './app.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from '~p/cart/cart'
import Order from '~p/order/order'
import Result from '~p/result/result'

/*Причина по которой мы пишем {this.props.message} в фигурных скобках заключается в том, 
что нам нужно сказать JSX, что мы хотим добавить JavaScript выражение. 
Это называется экранированием.*/

export default class extends Component {
    state = {
        formData: {
            name: {
                label: 'Name',
                value: ''
            },
            email: {
                label: 'Email',
                value: ''
            },
            phone: {
                label: 'Phone',
                value: ''
            }
        },
        activeRoute: 'CART',
        formDone: false
    }
    
    changeFormData = (name, value) => {
        let formData = {...this.state.formData}
        formData[name] = {...formData[name], value: value}
        this.setState({
            formData: formData
        })
    }

    moveToCart = () => {
        this.setState({
            activeRoute: "CART"
        })
    }

    moveToOrder = () => {
        this.setState({
            activeRoute: "ORDER"
        })
    }

    moveToResult = () => {
        this.setState({
            activeRoute: "RESULT"
        })
    }

    /*totalAmount() {
        let newProducts = [...this.state.products]
        let total = 0
        newProducts.map((product, i) => {
            total += product.price * product.current
        })
        return total
    }*/

    render() {
        let page

        switch(this.state.activeRoute) {
            case 'CART':
                page = <Cart
                    //products = {this.state.products}
                    //onChange = {this.changeCnt}
                    //onRemove = {this.remove}
                    onSend = {this.moveToOrder}
                />
                break
            case 'ORDER':
                page = <Order 
                    //formData = {this.state.formData}
                    //onChange = {this.changeFormData}
                    onSend = {this.moveToResult}
                    //onBack = {this.moveToCart}
                />
                break
            case 'RESULT':
                page = <Result />
                break
            default:
                page = <div>404</div>
        }

        return (
            <div className="container">
                {page}
            </div>
        )
    }
}

function showForm(productsRows, total, onSend) {
    return (
        <div>
            {/*<React.Fragment> - обертка для вида, в отличии от дива, не выводится затем в конечный результат*/}
            {/*<h2>Counter as class</h2>
            <CounterClass />
            <h2>Counter as class</h2>
            <CounterFunction />*/}
            <h2>Cart</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                        <td>Delete</td>
                    </tr>
                    {productsRows}
                </tbody>
            </table>
            <hr/>
            <div><span>Total: </span><span>{total}{/*this.totalAmount()*/}</span></div>
            <hr/>
            <button onClick={onSend}>Send</button>
            <hr />
            <button onClick={() => this.changeCnt(1, 4)}>Unreal change cnt</button>
        </div>
    )
}

function showCongrats() {
    return (
        <div>
            <h2>Congratulations! Your order in process</h2>
            {/*<CartCounter min = {20} max = {50}/>*/}
        </div>
    )
}

