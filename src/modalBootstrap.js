import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class Example extends Component {
    static propTypes = {
      buyProduct: PropTypes.array,
      total: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string
    }

    state = {
      show: false
    }

    handleClose = () => this.setState({show: false});

    handleCloseApply = () => {
      this.setState({show: false});
    }

    handleShow = () => {
      if (this.props.validForm) {
        this.setState({show: true});
      }
    }

    render() {
      let buyProduct = this.props.buyProduct
      let viewProducts = buyProduct.map((product, i) => {
        return (
          <tr key = {product.key}>
            <td>{product.props.children[0]}</td>
            <td>{product.props.children[1]}</td>
          </tr>
        )
      })
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Send
          </Button>
    
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Заказ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Подтвердите ваш заказ</h3>
              <p>Имя: {this.props.name}</p>
              <p>Email: {this.props.email}</p>
              <p>Телефон: {this.props.phone}</p>
              <table>
                <tbody>
                  <tr>
                    <th>Товар</th>
                    <th>Количество</th>
                  </tr>
                  {viewProducts}
                </tbody>
              </table>
              <p><strong>Итого: {this.props.total}</strong></p>
            </Modal.Body>
            <Modal.Footer>
              <Button 
                variant="secondary" 
                onClick={this.handleClose}
              >
                Close
              </Button>
              <Button 
                variant="primary" 
                onClick={this.handleCloseApply}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

  export default Example
  