function sumDiagonals(myArr) {
    let sumMainDiag = 0;
    let sumSecondaryDiag = 0;
    for (let i = 0; i < myArr.length; i++) {
        sumMainDiag += (i, myArr[i], myArr[i][i]);
        sumSecondaryDiag += (i, myArr[i], myArr[i][myArr.length - 1 - i]);
    }
    return (`${sumMainDiag} ${sumSecondaryDiag}`);
}

console.log(sumDiagonals([[20, 40],
                    [10, 60]]));