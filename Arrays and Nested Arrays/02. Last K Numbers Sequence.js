function lastKNumbers(n, k){
    const array = [1]
    for (let i = 1; i < n ; i++) {
        let sum =  0;
        for (let i2 = 0; i2 < k; i2++) {
            sum += array[i2];
        }
        array.push(sum)
    }
    console.log(...array)
}
lastKNumbers(6, 3)