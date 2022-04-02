function townJSON(arr) {
    arr.shift();
    townObj = [];
    
    for (const townEl of arr) {
        let townArr = (townEl.split("|"));
        townArr.shift();
        townArr.pop();

        for (let i = 0; i < townArr.length; i++) {
            townArr[i] = townArr[i].slice(1, -1);
        };

        town = {
            Town: townArr[0],
            Latitude: Number(parseFloat(townArr[1]).toFixed(2)),
            Longitude: Number(parseFloat(townArr[2]).toFixed(2))
        };

        townObj.push(town);
    };

    const result = JSON.stringify(townObj);
    console.log(result);

}
townJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);