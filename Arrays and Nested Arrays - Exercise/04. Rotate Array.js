function rotateArray(myArr, numberOfRotations) {
    for (let i = 0; i < numberOfRotations; i++) {
        myArr.unshift(myArr.pop())
    }
    return myArr.join(" ")
}
console.log(rotateArray([1, 2, 3, 4], 2))