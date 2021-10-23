/**
 * 
 * @param {string} firstString 
 * @param {string} secondString 
 * @param {string} thirdString 
 */
function stringLenght(firstString, secondString, thirdString){
    let sumChar = firstString.length + secondString.length + thirdString.length
    let average = sumChar / 3
    console.log(sumChar)
    console.log(Math.floor(average))

}

stringLenght('chocolate', 'ice cream', 'cake')