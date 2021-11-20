function sortArray(myArr) {
    myArr.sort((a, b) => a.localeCompare(b));
    let result = ""
    let counter = 1
    for (const name of myArr) {
        result += `${counter}.${name}\n`;
        counter += 1
    }
    return result;
}

console.log(sortArray(["John", "Bob", "Christina", "Ema"]))