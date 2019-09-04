import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Form, Button, Modal} from 'react-bootstrap'
import CartModel from '~s/cart'
import OrderModel from '~s/order'
import router from '~s/router'
import {observer} from 'mobx-react'

@observer class Order extends Component {
    static propTypes = {
        /*formData: PropTypes.object.isRequired,
        onSend: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired*/
    }

    render() {
        let productInfo = CartModel.products.map((product, i) => {
            return (
                <tr key = {product.title}>
                    <td>{product.title}</td>
                    <td>{product.current}</td>
                </tr>
            )
        })
    
        // цикл for..in для object
        let formFields = []

        //for(let name in this.props.formData) {
        for (let name in OrderModel.inputs) {
            let field = OrderModel.inputs[name]
            formFields.push(
                <Form.Group key = {name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control 
                        type = {field.type} 
                        value = {field.value}
                        onChange = {(e) => OrderModel.changeInput(name, e.target.value)}
                    />
                </Form.Group>
            )
        }

        let fieldsCorrect = OrderModel.inputs.map((el, i) => {
            return (
                <tr key={el.name}>
                    <td>{el.name}</td>
                    <td>{el.value}</td>
                </tr>
            )
        })


        return (
            <div>
                <h2>Order</h2>
                <hr/>
                <Form>
                    {formFields}
                </Form>
                <Button variant="warning" onClick = {() => router.moveTo("cart")}>
                    Back to Cart
                </Button>
                <Button variant="primary" onClick = {() => OrderModel.changeShowModal(true)}>
                    Apply order
                </Button>

                <Modal show={OrderModel.showModal} backdrop='static'>
                    <Modal.Header closeButton>
                    <Modal.Title>Проверьте данные перед отправкой</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>Ваши данные</h3>
                        <table>
                            <tbody>
                                {fieldsCorrect}
                            </tbody>
                        </table>
                        <hr />
                        <h3>Ваш заказ</h3>
                        <table>
                            <tbody>
                                {productInfo}
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={() => OrderModel.changeShowModal(false)}
                    >
                        Close
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={() => {router.moveTo("result")}}
                    >
                        Correct
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Order