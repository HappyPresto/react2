import React, {Component} from 'react'
import styles from './app.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from '~/cart/cart'
import Order from '~/order/order'
import Result from '~/result/result'

/*Причина по которой мы пишем {this.props.message} в фигурных скобках заключается в том, 
что нам нужно сказать JSX, что мы хотим добавить JavaScript выражение. 
Это называется экранированием.*/

export default class extends Component {
    state = {
        products: getProducts(),
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

    changeCnt = (i, cnt) => {
        // c стором - this.state.products[i].current = cnt
        let newProducts = [...this.state.products]
        let newProduct = {...newProducts[i]} // вытаскивается каждый эл-т title, rest и тд
        newProduct.current = cnt
        newProducts[i] = newProduct
        // newProducts[i] = {...newProducts[i], current: cnt}
        this.setState({
            products: newProducts
        })
    }

    remove = (i) => {
        let newProducts = [...this.state.products]
        newProducts.splice(i, 1)
        this.setState({
            products: newProducts
        })
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
                    products = {this.state.products}
                    onChange = {this.changeCnt}
                    onRemove = {this.remove}
                    onSend = {this.moveToOrder}
                />
                break
            case 'ORDER':
                page = <Order 
                    formData = {this.state.formData}
                    onChange = {this.changeFormData}
                    onSend = {this.moveToResult}
                    onBack = {this.moveToCart}
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

function getProducts() {
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            current: 1
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            current: 1
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            current: 1
        }
    ]
}