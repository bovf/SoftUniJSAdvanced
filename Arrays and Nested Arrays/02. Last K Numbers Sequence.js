function lastKNumbers(n, k){
    const array = [1]
    for (let i = 1; i < n ; i++) {
        let sum =  0;
        for (let i2 = i; i2 >= i - k; i2--) {
            if (array[i2]) {
                sum += array[i2];
            }
        }
        array.push(sum);
    }
    return(array);
    // console.log(array)
}
lastKNumbers(8, 2);