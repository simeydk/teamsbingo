export const intArray = (n, base = 0) => Array(n).fill('').map((_, i) => i + base);

export const chunkArray = (arr, chunkSize) => {
    const numChunks = Math.ceil(arr.length / chunkSize);
    const chunks = intArray(numChunks).map((_, i) => arr.slice(chunkSize * i, chunkSize * (i + 1)));
    return chunks;
};

export function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}


export function pickFromArray(array, indices) {
    return indices.map(i => array[i])
}

export function allTrue(array) {
    return (array.filter(x => x === true).length) === (array.length)
}
