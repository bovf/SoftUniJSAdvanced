function processOddPositions(myArray) {
    const myArrayReversed = [...myArray]
    const oddArray = []
    for (let i = 0; i < myArray.length ; i++) {
        if (i % 2 !== 0) {
            oddArray.unshift(2 * myArray[i])
        }
    }
    return [...oddArray]
}

console.log(processOddPositions([10, 15, 20, 25]))