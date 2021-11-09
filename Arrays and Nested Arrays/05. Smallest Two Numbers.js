function smallestTwo(myArr) {
    const [...myArrCopy] = myArr;
    myArrCopy.sort((a, b) => a - b);
    const [first, second] = myArrCopy;
    return `${first} ${second}`;

}
console.log(smallestTwo([30, 15, 50, 5]))