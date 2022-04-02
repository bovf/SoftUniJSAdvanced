function storeCatalouge(arr) {
    arr.sort();
    let letters = [];
    for (var i = 0; i < arr.length; i++) {
        if (letters.indexOf(arr[i][0]) === -1) {
            letters.push(arr[i][0]);
        }
    };
    let result = ``;
    while (arr.length > 0) {
        let letter = letters.shift();
        console.log(letter);
        while (arr.length > 0 && letter === arr[0][0]) {
            let product = arr.shift().split(` : `);
            let productArr = product[0] + `: ` + product[1];
            console.log(`  ${productArr}`)
        };
    };
}

storeCatalouge(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);