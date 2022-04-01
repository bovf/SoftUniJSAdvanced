function heroToJSON(heroArray) {
    let result = ``;
    let heroToJSONArr = [];
    for (const heroElement of heroArray) {
        let hero = {};
        const heroToBeConverted = heroElement.split(" / ");
        hero.name = heroToBeConverted[0];
        hero.level = parseInt(heroToBeConverted[1]);
        hero.items = heroToBeConverted[2] ? heroToBeConverted[2].split(", "): [];
        heroToJSONArr.push(hero);
    }
    result = JSON.stringify(heroToJSONArr);
    return result;
}

arr = ['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'] ;

console.log(heroToJSON(arr))