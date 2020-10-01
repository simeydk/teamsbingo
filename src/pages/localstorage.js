import React from 'react'
import {useLocalStorage} from '.'

import styles from './/index.module.css'

export default () => <div className={styles.page}>
    <h1>Hello World</h1>
    <button onClick={() => localStorage.setItem('test',Math.random())}>Click Me</button>
    
</div>