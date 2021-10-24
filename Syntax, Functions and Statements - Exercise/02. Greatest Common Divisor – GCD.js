function greatestCommonDivisor(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        for (let i = secondNumber; i > 0; i -= 1) {
            if (firstNumber % i === 0 && secondNumber % i === 0){
                console.log(i);
                break;
            }
        }

    } else {
        for (let i = firstNumber; i > 0; i -= 1) {
            if (secondNumber % i === 0 && secondNumber % i === 0){
                console.log(i);
                break;
            }
        }
    }
}
greatestCommonDivisor(15, 5)