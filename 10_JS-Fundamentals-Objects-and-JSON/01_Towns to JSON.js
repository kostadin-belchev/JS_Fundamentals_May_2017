function townsToJSON (array = []) {
    let objects = [];
    for (let i = 1; i < array.length; i++) {
        const element = array[i]; //each line
        let tokens = element.split('|').filter(s => s!='').map(e => e.trim());
        let town = tokens[0];
        let latitude = Number(tokens[1]);
        let longitude = Number(tokens[2]);
        let obj = {};
        obj['Town'] = town;
        obj['Latitude'] = latitude;
        obj['Longitude'] = longitude;
        objects.push(obj);
    }
    return JSON.stringify(objects);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));
