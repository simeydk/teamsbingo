import React, {useState } from 'react'

const intArray = (n, base = 0) => Array(n).fill('').map((_, i) => i + base)
const ZeroTo24 = intArray(25)

const chunkArray = (arr, chunkSize) => {
    const numChunks = Math.ceil(arr.length / chunkSize)
    const chunks = intArray(numChunks).map((_, i) => arr.slice(chunkSize * i, chunkSize * (i+1)))
    return chunks
}

chunkArray(intArray(20,1),6)

export default () => {
    const [checked, setChecked] = useState(Array(25).fill(false))
    const toggle = i => {setChecked(oldChecked => {
        const checked = [...oldChecked]
        checked[i] = !checked[i]
        return checked
    })}

    const cells = ZeroTo24.map((x, i) => <td className={"cell " + (checked[i] ? "checked" : "")} onClick ={() => toggle(i)}>{x}</td>)

    const rows = chunkArray(cells,5).map((cells, i) =><tr id={`row-${i}`}>{cells}</tr>)

    return <div>
        <h1>Teams Bingo!</h1>
        <table>
            {rows}
        </table>
    </div>
}