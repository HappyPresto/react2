import React, {Component} from 'react'
import CounterClass from './counter/class'
import CounterFunction from './counter/function'
import CartCounter from './inputs/minmax/minmax'
import FormCaller from './formCaller'
import 'bootstrap/dist/css/bootstrap.min.css'

/*Причина по которой мы пишем {this.props.message} в фигурных скобках заключается в том, 
что нам нужно сказать JSX, что мы хотим добавить JavaScript выражение. 
Это называется экранированием.*/

export default class extends Component {
    state = {
        products: getProducts(),
        formDone: false
    }

    sendForm = () => { // стрелочная ф-ия что бы не терять контекст
        this.setState({
            formDone: true
        })
    }

    changeCnt(i, cnt) {
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

    remove(i) {
        let newProducts = [...this.state.products]
        newProducts.splice(newProducts[i], 1)
        this.setState({
            products: newProducts
        })
    }

    showPersonForm(total) {
        let productsName = this.state.products.map((product, k) => {
            return (
                <div key = {product.id}>
                    <p>{product.title}</p>
                    <p>{product.current}</p>
                </div>
            )
        })
        return (
            <div>
                <FormCaller 
                    buyProduct = {productsName}
                    total = {total}
                />
            </div>
        )
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
        let total = this.state.products.reduce((t, pr) => {
            return t + (pr.current * pr.price)
        }, 0)
        let productsRows = this.state.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <CartCounter 
                            min = {1} 
                            max = {product.rest} 
                            cnt = {product.current}
                            onChange = {(cnt) => this.changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td><button onClick={() => this.remove(i)}>Delete</button></td>
                </tr>
            )
        })
        // let page = this.state.formDone ? showCongrats() : showForm(productsRows, total, this.sendForm) 
        let page = this.state.formDone ? this.showPersonForm(total) : showForm(productsRows, total, this.sendForm) 

        return (
            <div>
                {console.log(this.state.products)}
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