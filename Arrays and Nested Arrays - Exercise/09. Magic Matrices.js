// function magicMatrix (myArr) {
//     let sumRow = 0;
//     let sumCol = 0;
//     let sumFirstRow = 0;
//     let sumFirstCol = 0;
//     let isItMagic = false;
//     for (let i = 0; i < myArr.length; i++) {
//         for (let i2 = 0; i2 < myArr[i].length ; i2++) {
//             if (i === 0){
//                 sumFirstRow += myArr[i][i2];
//             }else {
//                 sumRow += myArr[i][i2];
//             }
//         }
//         if (i !== 0) {
//             if (sumFirstRow !== sumRow) {
//                 return isItMagic;
//             }
//             sumRow = 0;
//         }
//     }
//     for (let i = 0; i < myArr.length; i++) {
//         for (let i2 = 0; i2 < myArr[i].length ; i2++) {
//             if (i === 0){
//                 sumFirstCol += myArr[i2][i];
//             }else {
//                 sumCol += myArr[i2][i];
//             }
//         }
//         if (i !== 0) {
//             if (sumFirstCol !== sumCol) {
//                 return isItMagic;
//             }
//             sumCol = 0;
//         }
//     }
//     isItMagic = true
//     return isItMagic;
// }
//
// console.log(magicMatrix([[4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]));
// console.log(magicMatrix([[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]));
// console.log(magicMatrix([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]));

function magicMatrix (myArr) {
    let sumRow = 0;
    let sumCol = 0;
    let sumFirstRow = 0;
    let sumFirstCol = 0;
    let isItMagic = true;
    for (let i = 0; i < myArr.length; i++) {
        for (let i2 = 0; i2 < myArr[i].length; i2++) {
            if (i === 0) {
                sumFirstRow += myArr[i][i2];
                sumFirstCol += myArr[i2][i];
            } else {
                sumRow += myArr[i][i2];
                sumCol += myArr[i2][i];
            }
        }

        if (i !== 0) {
            if (sumFirstRow !== sumRow) {
                isItMagic = false;
                return isItMagic;
            }
            if (i !== 0) {
                if (sumFirstCol !== sumCol) {
                    isItMagic = false;
                    return isItMagic;
                }
                sumRow = 0;
                sumCol = 0;
            }
        }else {
            if (sumFirstCol !== sumFirstRow) {
                isItMagic = false;
                return isItMagic
            }
        }
    }
    return isItMagic;
}

console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));
console.log(magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));
console.log(magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));
console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
    [undefined,undefined,undefined,undefined5]]));
console.log(magicMatrix([]))
