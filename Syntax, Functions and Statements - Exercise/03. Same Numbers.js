/**
 *
 * @param {number} number
 */
function sameNumbers(number){
    let numberString = number.toFixed();
    let isItTrue = true;
    let sumNumbers = 0;
    for (let i = 0; i < numberString.length; i++) {
        if (i === 0){
            sumNumbers += parseInt(numberString[i]);
        } else {
            isItTrue = numberString[i] === numberString[i - 1];
            sumNumbers += parseInt(numberString[i]);
        }

    }
    console.log(isItTrue);
    console.log(sumNumbers);
}
sameNumbers(2222222);