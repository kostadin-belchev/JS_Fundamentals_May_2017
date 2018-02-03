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

    // SORTING
    for (const [system, components] of systemsMap) {
        systemsMap.set(system, new Map([...components].sort((a, b) => [...b[1]].length - [...a[1]].length)));
    }
    //systemsMap;
    systemsMap = new Map(Array.from(systemsMap).sort((a, b) => {
        let systemNameA = a[0].toLowerCase(); //The string comparison for the alphabetical order is case-insensitive.
        let systemNameB = b[0].toLowerCase(); 
        let componentsA = a[1];
        let componentsB = b[1];
        let componentsALength = Array.from(componentsA).length;
        let componentsBLength = Array.from(componentsB).length;
        if (componentsALength === componentsBLength) { // and by alphabetical order as second criteria.  
            if (systemNameA > systemNameB)
                return 1;
            else (systemNameA < systemNameB)
                return -1;
            return 0;
            //return systemNameA.localeCompare(systemNameB);
        } else {
            return componentsB.length - componentsA.length; //The Systems you’ve stored must be ordered by amount of components, in descending order, as first criteria, 
        }
    }))
    //systemsMap;

    //PRINTING
    for (const [system, compnents] of systemsMap) {
        console.log(system);
        for (const [compnent, subcomponents] of compnents) {
            console.log(`|||${compnent}`);
            for (const subcomponent of subcomponents) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }
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