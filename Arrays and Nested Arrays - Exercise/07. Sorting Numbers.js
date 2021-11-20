function sortNumbers(myArr) {
    myArr.sort((a, b) => a - b)
    let resultArr = []
    while (myArr.length !== 0) {
        resultArr.push(myArr.shift(), myArr.pop())
    }
    return resultArr
}
console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))