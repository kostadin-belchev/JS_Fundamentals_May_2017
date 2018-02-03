function systemComponents (array = []) {
    // READING AND STORING DATA
    let systems = new Map();
    for (const inputLine of array) {
        let [systemName, componentName, subcomponentName] = inputLine.split(' | ');
        if (!systems.has(systemName)) {
            systems.set(systemName, new Map());
        }
        if (!systems.get(systemName).has(componentName)) {
            systems.get(systemName).set(componentName, new Set());
        }
        //if we arrive at this point we have made sure that we have created the system and the component for that system and we need to add the subcomponent to the set
        systems.get(systemName).get(componentName).add(subcomponentName);
    }
    //systems;

    // SORTING DATA
    // The Systems you’ve stored must be ordered by amount of components, in descending order, as first criteria, 
    // and by alphabetical order as second criteria. The Components must be ordered by amount of Subcomponents, in descending order.
    systems = new Map([...systems].sort((a, b) => {
        let componentsALength = [...a[1]].length;
        let componentsBLength = [...b[1]].length;
        if (componentsALength == componentsBLength) {
            let systemAName = a[0].toLowerCase(); // The string comparison for the alphabetical order is case-insensitive.
            let systemBName = b[0].toLowerCase();
            return systemAName.localeCompare(systemBName);
        } else {
            return componentsBLength - componentsALength;
        }
    }));
    //systems;

    for (const [system, components] of systems) {
        systems.set(system, new Map([...components].sort((a, b) => {
            let subcomponentsALength = [...a[1]].length;
            let subcomponentsBLength = [...b[1]].length;
            return subcomponentsBLength - subcomponentsALength;
        })));
    }
    //systems;

    // PRINTING
    for (const [system, components] of systems) {
        console.log(system);
        for (const [component, subcomponents] of components) {
            console.log(`|||${component}`);
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