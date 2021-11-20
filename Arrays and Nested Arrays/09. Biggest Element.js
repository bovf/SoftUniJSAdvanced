function biggestElement(myArr)  {
    const arrayUnpacked = [];

    for (let row of myArr) {
        for (let col of row){
            arrayUnpacked.unshift(col);

        }
    }
    arrayUnpacked.sort((a, b) => b - a);
    return(arrayUnpacked[0]);
}
console.log(biggestElement([[3, 5, 17, 12, 91, 5,],
[-1, 7, 4, 33, 6, 22],
[1, 8, 99, 3, 10, 43]]))