import React, { useState } from "react";
import styles from "./flipcard.module.css"

const FlipCard = ({ children, className = "", hover = false, horizontal = false, ...props }) => {
    const [flipped, setFlipped] = useState(false)
    const toggleFlipped = () => setFlipped(!flipped)

    return <div className={`${styles.wrapper} ${hover ? styles.hover : ''} ${horizontal ? styles.horizontal : ''} ${className}`}>
        <div className={`${styles.card} ${hover ? '' : flipped ? styles.flipped : ''}`} onClick={toggleFlipped} {...props}>
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