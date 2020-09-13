import React, {useState } from 'react'
import { intArray, chunkArray, shuffle } from '../../utils'

import styles from './styles.module.css'
import { useEffect } from 'react'

const ZeroTo24 = intArray(25)

chunkArray(intArray(20,1),6)

const quotes = shuffle(getLines())

export default () => {
    
    const [checked, setChecked] = useState(Array(25).fill(false))
    const toggle = i => {setChecked(oldChecked => {
        const checked = [...oldChecked]
        checked[i] = !checked[i]
        return checked
    })}

    const cells = ZeroTo24.map((x, i) => <td className={styles.cell+ " " + (checked[i] ? styles.checked : "")} onClick ={() => toggle(i)}>{quotes[i]}</td>)

    cells[12] = <TeamsLogo />

    const rows = chunkArray(cells,5).map((cells, i) =><tr id={`row-${i}`}>{cells}</tr>)

    return <div className={styles.card}>
        <h1 className={styles.header}> Teams Bingo!</h1>
        <div className={styles.table_wrapper}></div>
        <table className={styles.table}>
            {rows}
        </table>
    </div>
}

function TeamsLogo() {
    const [bill, setBill] = useState(false)
    const src = bill ? "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Bill_Gates_July_2014.jpg/159px-Bill_Gates_July_2014.jpg" : "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg"
    return <td className={styles.cell + ' ' + styles.image_cell}><img className={styles.image} src={src} onDoubleClick={() => setBill(x => !x)}/></td>
}

function getLines() {
    return [
      "You're on mute",
      "Can you hear me now",
      "Can you see my screen",
      "Can you see the next slide",
      "Can you hear me",
      "You can have 10 minutes of your day back",
      "I dropped off",
      "I was on mute and having a conversation with myself",
      "I was on mute",
      "No you go first / no you go first",
      "I have network issues",
      "I have network issues due to loadshedding",
      "I'm not camera ready",
      "I'm having a bad hair day",
      "I forgot to put my hand down",
      "Were you meant to have your hand up?",
      "Let's take this offline",
      "Is someone typing? ",
      "I can hear myself echo",
      "BRB - I need to collect a delivery",
      "BRB - my kids are screaming",
      "I need to drop off",
      "We can't hear you - use the comment box",
      "I think he has frozen",
      "I'm dialing in from my phone",
      "Stay safe everyone",
      "Liverpool",
      "Someone sends a screenshot",
      "PRMA",
      "You're NOT on mute",
      "I thought I was sharing my screen",
      "Loadshedding just kicked in"
    ];
  }