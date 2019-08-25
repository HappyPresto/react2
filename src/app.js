import React from 'react'
import CounterClass from './counter/class'
import CounterFunction from './counter/function'

export default function() {
    return (
        <div>
            <h2>Counter as class</h2>
            <CounterClass />
            <h2>Counter as class</h2>
            <CounterFunction />
        </div>
    )
}