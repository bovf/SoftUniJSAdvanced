const myArr = [[4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]]
let sumRow = 0;
let sumCol = 0;
let isItMagic = false
for (let row of myArr) {
    if (sumCol === sumRow) {
        sumCol = 0;
        for (let col of row) {
            sumCol += col;
        }
        let sumRow = sumCol;
    }
    else {console.log(isItMagic); break;}
}
isItMagic = true
console.log(isItMagic)