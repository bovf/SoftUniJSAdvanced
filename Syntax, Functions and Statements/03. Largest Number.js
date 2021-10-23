/**
 * 
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @param {number} thridNumber 
 */
function largestNumber(firstNumber, secondNumber, thridNumber) {
    let result;
    if (firstNumber > secondNumber && firstNumber > thridNumber) {
        result = firstNumber;
    }else if (secondNumber > firstNumber && secondNumber > thridNumber) {
        result = secondNumber;     
    }else {
        result = thridNumber
    }
    console.log(`The largest number is ${result}.`)
}