/**
 * 
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 * @param {string} operator 
 */
function mathOperations(firstNumber, secondNumber, operator) {
    // '+', '-', '*', '/', '%', '**'.
    if (operator == "+") {
        console.log(firstNumber + secondNumber) ;
    }else if (operator == "-") {
       console.log(firstNumber - secondNumber) ;
    }else if (operator == "*") {
        console.log(firstNumber * secondNumber)  ;
    }else if (operator == "/") {
        console.log(firstNumber / secondNumber) ;
    }else if (operator == "%") {
        console.log(firstNumber % secondNumber) ;
    }else if (operator == "**") {
        console.log(firstNumber ** secondNumber) ;
    }
}

mathOperations(5, 6, "+");