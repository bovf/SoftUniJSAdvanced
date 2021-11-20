function equalNeighbors(myArr) {
    let numberOfPairs = 0
    for (let i = 0; i < myArr.length; i++) {
        for (let i2 = 0; i2 < myArr[i].length ; i2++) {
            if (i2 < myArr[i].length - 1) {
                if (myArr[i][i2] === myArr[i][i2 + 1]) {numberOfPairs ++;}

            }
            if (i < myArr.length - 1){
                if (myArr[i][i2] === myArr[i+1][i2]) {numberOfPairs ++;}
            }

        }
    }
    return numberOfPairs;
}

console.log(equalNeighbors([[2, 3, 4, 7, 0],
[4, 0, 5, 3, 4],
[2, 3, 5, 4, 2],
[9, 8, 7, 5, 4]]))