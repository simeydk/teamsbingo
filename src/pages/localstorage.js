import React from "react"


import useLocalStorage from "../utils/hooks/useLocalStorage"

import styles from './localstorage.module.css'

const CounterWithLS = ({ counterKey }) => {
    const [count, setCount] = useLocalStorage(counterKey, 0)
    const plus = () => setCount(x => x + 1)
    const minus = () => setCount(x => x - 1)

    return <div className={styles.card}>
        <h1 className={styles.cardTitle}>Counter: {counterKey}</h1>
        <div className={styles.counter}>
            <button className={styles.button} onClick={minus}>-</button>
            <div className={styles.count}>{count}</div>
            <button className={styles.button} onClick={plus}>+</button>
        </div>
    </div>

}

export default () => <div className={styles.page}>
    <div className={styles.main}>
    <CounterWithLS counterKey="shoes" />
    <CounterWithLS counterKey="socks" />
    <CounterWithLS counterKey="shoes" />
    </div>
</div>