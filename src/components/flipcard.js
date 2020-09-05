import React, { useState } from "react";
import styles from "./flipcard.module.css"

const FlipCard = ({ children, className = "", ...props }) => {
    const [flipped, setFlipped] = useState(false)
    const toggleFlipped = () => setFlipped(!flipped)

    return <div className={`${styles.wrapper} ${className}`}>
        <div className={`${styles.card} ${flipped ? styles.flipped : ''}`} onClick={toggleFlipped} {...props}>
            {children}
        </div>
    </div>
}

const Front = ({ children, className = "", ...props }) => {
    return <div className={`${styles.front} ${className}`} {...props}>
        {children}
    </div>
}

const Back = ({ children, className = "", ...props }) => {

    return <div className={`${styles.back} ${styles.flipped} ${className}`} {...props}>
        {children}
    </div>
}

Object.assign(FlipCard, { Front, Back })
export default FlipCard