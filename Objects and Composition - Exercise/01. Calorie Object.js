function makeObjects (arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result[arr[i]] = parseInt(arr[i + 1]);
        }
    }
    return result;
}
console.log(makeObjects(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));