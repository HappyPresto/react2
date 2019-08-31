import React from 'react'
import {observable, computed, action} from 'mobx'
import Cart from '~p/cart/cart'
import Order from '~p/order/order'
import Result from '~p/result/result'

class Router {

    routes = {
        cart: () => <Cart />, // заменяется на React.createElement, поэтому нужно подключение react"а
        order: () => <Order />,
        result: () => <Result />
    }
    
    @observable activeRoute = 'cart'

    @computed get component() {
        return this.routes[this.activeRoute]() // раз ф-ия, то ее нужно вызвать
    }

    @action moveTo(route) {
        this.activeRoute = route
    }
}

export default new Router()