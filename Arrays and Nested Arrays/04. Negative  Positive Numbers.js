function negativePositiveNumbers(myArr) {
    const newArr = [];
    for (const myArrElement of myArr) {
        if (myArrElement < 0) {
            newArr.unshift(myArrElement)
        }
        else {
            newArr.push(myArrElement)
        }
    }
    return newArr
}
console.log(negativePositiveNumbers([7, -2, 8, 9]))