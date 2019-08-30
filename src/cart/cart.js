import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AppMinMax from '~/inputs/minmax/minmax'

export default class Cart extends Component {
    static propTypes = {
        products: PropTypes.array.isRequired,
        onSend: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired
    }
    render() {
        let total = this.props.products.reduce((t, pr) => {
            return t + (pr.current * pr.price)
        }, 0)
        let productsRows = this.props.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax 
                            min = {1} 
                            max = {product.rest} 
                            cnt = {product.current}
                            onChange = {(cnt) => this.props.onChange(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td><button onClick={() => this.props.onRemove(i)}>Delete</button></td>
                </tr>
            )
        })

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
                <button 
                    className = "btn btn-primary"
                    onClick={this.props.onSend}
                >Send</button>
            </div>
        )
    }
}