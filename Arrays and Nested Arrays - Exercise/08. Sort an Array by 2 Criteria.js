function sortToCriteria(myArr) {
    myArr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b)
        }
        else return a.length - b.length
    });
    return myArr.join("\n");
}

console.log(sortToCriteria(['alpha', 'beta', 'gamma']))
console.log(sortToCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']))
console.log(sortToCriteria(['test', 'Deny', 'omen', 'Default']))