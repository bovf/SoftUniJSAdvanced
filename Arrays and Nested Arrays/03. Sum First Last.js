function firstLast(myArray) {
    const first = Number(myArray.pop());
    const second = Number(myArray.shift());
    // return first + second;
    return first + second
}


console.log(firstLast([3, -2, 0, -1]));