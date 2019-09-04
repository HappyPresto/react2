import {observable, computed, action} from 'mobx'

class Order {
    @observable inputs = getInputs()
    @observable showModal = false

    @action changeInput(i, val) {
        this.inputs[i].value = val
    }

    @action changeShowModal(newValue) {
        for (let i = 0; i < this.inputs.length; i++) {
            if (this.inputs[i].value == "") {
                return this.showModal = false
            }
            
        }
        this.showModal = newValue
    }

}

export default new Order()

function getInputs() {
    return [
        {
            name: "name",
            label: "Введите имя",
            type: "text",
            value: ""
        },
        {
            name: "phone",
            label: "Введите телефон",
            type: "text",
            value: ""
        },        {
            name: "mail",
            label: "Введите почту",
            type: "email",
            value: ""
        }
    ]
}