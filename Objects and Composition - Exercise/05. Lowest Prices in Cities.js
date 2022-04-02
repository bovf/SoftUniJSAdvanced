function findLowestPrices(arr) {
    let productObjects = [];
    for (const el of arr) {
        const elArr = el.split(" | ");
        const city = {
            cityName: elArr[0],
            cityProduct: elArr[1],
            cityPrice: parseFloat(elArr[2])
        };
        productObjects.push(city);
    };
    let productKeys = [];
    for (const product of productObjects) {
        if (productKeys.indexOf(product.cityProduct) === -1) {
            productKeys.push(product.cityProduct);
        }
    };
    for (const key of productKeys) {
        objContaining = [];
        for (const product of productObjects) {
            if (key === product.cityProduct) {
                objContaining.push(product);
            }
            
        };
        objContaining.sort((a, b) => a.cityPrice - b.cityPrice);
        console.log(`${objContaining[0].cityProduct} -> ${objContaining[0].cityPrice} (${objContaining[0].cityName})`);
        
    };
}

findLowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);
