function addOrRemove(myArr) {
    const numbers = [];
    let number = 1;
    for (const command of myArr) {
        if (command === "add") {numbers.push(number);}
        else {numbers.pop();}
        number ++;
    }
    if (numbers.length > 0) {return numbers.join("\n");}
    else {return "Empty";}
}
console.log(addOrRemove(['add', 'add', "remove", 'add', 'add']))