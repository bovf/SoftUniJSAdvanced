/**
 * @param {array} myArr
 */
function biggerHalf(myArr) {
    myArr.sort((a, b) => a -b)
    return myArr.slice(myArr.length / 2, myArr.length)
}

biggerHalf([3, 19, 14, 7, 2, 19, 6])