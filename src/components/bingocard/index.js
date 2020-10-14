import React, { useState } from 'react'
import { intArray, chunkArray, shuffle, pickFromArray, allTrue } from '../../utils'
import useLocalStorage from '../../utils/hooks/useLocalStorage'
import styles from './styles.module.css'
import { useEffect } from 'react'

const ZeroTo24 = intArray(25)

chunkArray(intArray(20, 1), 6)


const getInitialChecked = () => {
    const checked = Array(25).fill(false)
    checked[12] = true
    return checked
}

const getShuffledLines = () => shuffle(getLines()).slice(0, 25)

export default function BingoCard() {
    const [quotes, setQuotes] = useLocalStorage('quotes', getShuffledLines())
    const [checked, setChecked] = useLocalStorage('checked', getInitialChecked())
    const reset = () => {
        setQuotes(getShuffledLines())
        setChecked(getInitialChecked())
    }
    const toggle = i => {
        setChecked(oldChecked => {
            const checked = [...oldChecked]
            checked[i] = !checked[i]
            return checked
        })
    }

    useEffect(() => toggle(12), [])

    const winningLines = getWinningLines(checked)
    const isWinning = winningLines.length > 0
    const winningIndices = new Set((winningLines.map(line => line.indices).flat()))
    const cellIsWinning = ZeroTo24.map(i => winningIndices.has(i))

    // console.log({
    //     winningLines, isWinning, winningIndices, cellIsWinning
    // })
    const cells = ZeroTo24.map((x, i) => <td key={i} className={styles.cell + " " + (checked[i] ? styles.checked : "") + " " + (cellIsWinning[i] ? styles.winning : "")} onClick={() => toggle(i)}>{quotes[i]}</td>)

    cells[12] = <TeamsLogo key={12} />

    const rows = chunkArray(cells, 5).map((cells, i) => <tr id={`row-${i}`}>{cells}</tr>)

    return <div className={styles.wrapper}>
        <div className={styles.card}>
            <h1 className={styles.header}> Teams Bingo!</h1>
            <div className={styles.table_wrapper}></div>
            <table className={styles.table}>
                {rows}
            </table>
        </div>
        <button className={styles.reset_button} onClick={reset}>Reset</button>
    </div>
}

function TeamsLogo() {
    const [bill, setBill] = useState(false)
    const src = bill ? "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Bill_Gates_July_2014.jpg/159px-Bill_Gates_July_2014.jpg" : "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg"
    return <td className={styles.cell + ' ' + styles.image_cell}><img className={styles.image} src={src} onDoubleClick={() => setBill(x => !x)} /></td>
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

function winningIndices() {
    return [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],

        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],

        [0, 6, 12, 18, 24],
        [20, 16, 12, 8, 4],
    ]
}

function getWinningLines(isChecked) {
    return winningIndices().map(line => {
        const values = pickFromArray(isChecked, line)
        const isWinner = allTrue(values)
        return {
            indices: line, values, isWinner
        }
    }).filter(line => line.isWinner)
}