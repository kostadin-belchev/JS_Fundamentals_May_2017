function systemComponents (array) {
    let systemsMap = new Map();
    //reading input and storing it
    for (const inputLine of array) {
        let [systemName, componentName, subcomponentName] = inputLine.split(' | ');
        if (!systemsMap.has(systemName)) {
            systemsMap.set(systemName, new Map());
        }
        if (!systemsMap.get(systemName).has(componentName)) {
            systemsMap.get(systemName).set(componentName, [])
        }
        // if we arrive at this point we have made sure that the system and the compnent exists in that system, 
        // and we just add the subcomponnent directly since the subcomponents will always be unique
        systemsMap.get(systemName).get(componentName).push(subcomponentName);
    }
    systemsMap;

    // sorting
    let resultSorted = Array.from(Array.from(systemsMap)[1]).sort((a, b) => {
        
    });
    resultSorted;
    // let sortedSystemsArray = [...systemsMap].sort( (a, b) => {
    //     let systemA = a;
    //     let systemB = b;
    //     let numberOfcompnentsOfSystemA = a[1].size;
    //     let numberOfCompnentsOfSystemB = b[1].size;
    //     if (numberOfcompnentsOfSystemA == numberOfCompnentsOfSystemB) { // if they have equal number of components then we go to second criteria
    //         let componentNameA = a[0].toLowerCase();
    //         let componentNameB = b[0].toLowerCase();
    //         return componentNameA.localeCompare(componentNameB); // order by alphabetical order as second criteria
    //     } else {
    //         return numberOfCompnentsOfSystemB - numberOfcompnentsOfSystemA; //ordered by amount of components, in descending order, as first criteria
    //     }
    // });
    // sortedSystemsArray;
}

systemComponents([
`SULS | Main Site | Home Page`,
`SULS | Main Site | Login Page`,
`SULS | Main Site | Register Page`,
`SULS | Judge Site | Login Page`,
`SULS | Judge Site | Submittion Page`,
`Lambda | CoreA | A23`,
`SULS | Digital Site | Login Page`,
`Lambda | CoreB | B24`,
`Lambda | CoreA | A24`,
`Lambda | CoreA | A25`,
`Lambda | CoreC | C4`,
`Indice | Session | Default Storage`,
`Indice | Session | Default Security`
])