function aggregateElements(array) {
    let sum = 0;
    let sumInverse = 0
    let concatanete = "";

    for (let index = 0; index < array.length; index++) {
        number = array[index];
        sum += number;
    }

    for (let index = 0; index < array.length; index++) {
        number = 1/array[index];
        sumInverse += number;
    }
    
    for (let index = 0; index < array.length; index++) {
        character = `${array[index]}`;
        concatanete += character       
    }
    console.log(sum)
    console.log(sumInverse)
    console.log(concatanete)
}

aggregateElements([1, 2, 3])