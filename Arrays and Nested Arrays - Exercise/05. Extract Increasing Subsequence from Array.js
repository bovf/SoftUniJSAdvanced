function increasingSubset(myArr) {
    const result = []
    let biggest = Number.MIN_SAFE_INTEGER;
    for (const num of myArr) {
        if (num >= biggest) {
            biggest = num;
            result.push(num);
        }

    }
    return result
}

console.log(increasingSubset([Number.MIN_SAFE_INTEGER]));