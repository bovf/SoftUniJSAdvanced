function townPopulation(myArr) {
    const towns = {};
    for (const myArrElement of myArr) {
        let [name, population] = myArrElement.split(" <-> ");
        population = parseInt(population);


        if (towns[name] !== undefined) { 
            population += towns[name];
        } else {
        towns[name] = population;
        }
    }
    for (const townsKey in towns) {
        console.log(`${townsKey} : ${towns[townsKey]}`)
        
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)