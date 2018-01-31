function populationInTowns (array) {
    let townsMap = new Map();
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let [town, population] = element.split(' <-> '); //population is NOT parsed as a number, we will have to do it manually
        population = Number(population); //parsing population to a number
        if (!townsMap.has(town)) {
            townsMap.set(town, 0);
        }
        townsMap.set(town, townsMap.get(town) + population);  // here we sum the existing population with the new population entered for this town
    }
    //printing
    // for (const kvp of townsMap) {
    //     console.log(`${kvp[0]} : ${kvp[1]}`);
    // }
    [...townsMap].forEach(([name, pop]) => console.log(`${name} : ${pop}`))
}

populationInTowns([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
    ])