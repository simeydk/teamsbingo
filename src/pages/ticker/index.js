import React, { useRef, useState } from 'react'

import styles from './ticker.module.css'

export default () => <App />



const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)
    const plus = () => setCount(x => x + 1)
    const minus = () => setCount(x => x - 1)

    return [count, setCount, plus, minus]
}

const App = () => {
    const [count, _, plus, minus] = useCounter()
    const [tick, __, plusTick] = useCounter()
    const values = useHistory(count, () => plusTick(), 5)
    return (<div >
        <h1>Hello World</h1>
            <div>
                <button onClick={minus}>-</button>
                <span>{count}</span>
                <button onClick={plus}>+</button>
                <div>
                    {JSON.stringify(values)}
                </div>
                <div>
                    {tick}
                </div>
            </div>
        </div>)
}

function useHistory(value, onChange, maxLength) {
    const values = useRef([value])
    const history = values.current
    if (history[0] !== value) {
        history.unshift(value)
        if(maxLength && history.length > maxLength) {history.splice(maxLength)}
        if(onChange) {onChange(history)}
    }
    return history
}