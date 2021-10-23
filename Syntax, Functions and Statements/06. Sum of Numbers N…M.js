function sumOfNumbers(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let sum = 0;
    for (let index = firstNumber; index <= secondNumber; index++) {
        sum += index;
    }
    console.log(sum);
}

sumOfNumbers(1, 5);