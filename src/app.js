import React from 'react'
import CounterClass from './counter/class'
import CounterFunction from './counter/function'
import CartCounter from './counter/cartCounter'

export default function() {
    return (
        <div>
            <h2>Counter as class</h2>
            <CounterClass />
            <h2>Counter as class</h2>
            <CounterFunction />
            <h2>Min\Max</h2>
            <CartCounter min={1} max={5}/>
        </div>
    )
}