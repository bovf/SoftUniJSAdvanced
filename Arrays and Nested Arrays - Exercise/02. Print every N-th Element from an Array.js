function printNElement(myArr, num) {
    const nElArray = [];
    for (let i = 0; i < myArr.length; i += (num)) {
        nElArray.push(myArr[i]);
    }
    return nElArray;
}

console.log(printNElement(['5',
        '20',
        '31',
        '4',
        '20'],
    2
))