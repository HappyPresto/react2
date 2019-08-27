import React, {Component} from 'react'
import CounterClass from './counter/class'
import CounterFunction from './counter/function'
import CartCounter from './counter/cartCounter'

export default class extends Component {
    state = {
        products: [
            {
                id: 100,
                title: 'iPhone 200',
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
            }
        ]
    }

    changeCnt(i, cnt) {
        // c стором - this.state.products[i].current = cnt
        let newProducts = [...this.state.products]
        let newProduct = {...newProducts[i]}
        newProduct.current = cnt
        newProducts[i] = newProduct
        this.setState({
            products: newProducts
        })
    }

    render() {
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
                </tr>
            )
        })
        return (
            <div>
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
                        </tr>
                        {productsRows}
                    </tbody>
                </table>
                {/*<CartCounter min = {20} max = {50}/>*/}
            </div>
        )
    }
}