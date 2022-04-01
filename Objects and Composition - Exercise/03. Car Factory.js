function buildCar(obj) {
    const engines = [{ power: 90, volume: 1800 }, 
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }];
    const wheels = obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize;
    
    // let result = {};
    // result.model = obj.model;
    // result.engine = engines.filter(engine => engine.power >= obj.power)[0];
    // result.carriage = {
    //     type: obj.carriage,
    //     color: obj.color
    // };
    // result.wheels = [wheels, wheels, wheels, wheels];

    let result = {
        model: obj.model,
        engine: engines.filter(engine => engine.power >= obj.power)[0],
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: [wheels, wheels, wheels, wheels]
    }
    return result;
}

console.log(buildCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));