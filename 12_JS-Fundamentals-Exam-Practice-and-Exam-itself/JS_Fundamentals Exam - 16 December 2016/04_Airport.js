function airport (input = []) {
    let flights = new Map();
    let landedPlanes = [];

    for (const inputLine of input) {
        let validInputCommand = false;
        let [planeId, town, passengersCount, action] = inputLine.split(' ');
        passengersCount = Number(passengersCount);

        // Calculating the IDs of planes that remain at our airport
        if (action == 'land'){
            if (landedPlanes.find(e=>e == planeId) == undefined){
                landedPlanes.push(planeId);
                validInputCommand = true;
            }
        } else if (action == 'depart') {
            if (landedPlanes.find(e => e == planeId) != undefined){
                let planeToRemove = landedPlanes.find(e => e == planeId);
                landedPlanes.splice(landedPlanes.indexOf(planeToRemove), 1);
                validInputCommand = true;
            }
        }

        // A list of towns with the number of arrivals and departures for each town, and all unique IDs of the planes that made the flights.
        if (!flights.has(town) && validInputCommand) {
            flights.set(town, {arrivals:0, departures:0, uniquePlanes: new Set() });
        }

        if (action == 'land' && validInputCommand) {
            let newValue = flights.get(town).arrivals + passengersCount;
            flights.get(town)['arrivals'] = newValue;
            flights.get(town).uniquePlanes.add(planeId); // all unique IDs of the planes that made the flights
        } else if (action == 'depart' && validInputCommand ) {
            let newValue = flights.get(town).departures + passengersCount;
            flights.get(town)['departures'] = newValue;
            flights.get(town).uniquePlanes.add(planeId);
        }
        
        
    }
    //flights;

    //SORTING
    // The IDs of planes that remain at our airport (their last valid action is land). Sort them alphabetically.
     landedPlanes = landedPlanes.sort((a, b) => a.localeCompare(b))
    
    //A list of towns with the number of arrivals and departures for each town, and all unique IDs of the planes that made the flights. 
    //Sort the towns by the number of arrivals (descending). If two towns have the same number, sort them alphabetically by name (ascending). 
    //Sort the list of planes for each town alphabetically.
    flights = new Map([...flights].sort((a, b) => {
        let townNameA = a[0];
        let townNameB = b[0];
        let arrivalsA = a[1].arrivals;
        let arrivalsB = b[1].arrivals;
        if (arrivalsA == arrivalsB) {
            return townNameA.localeCompare(townNameB); // HAD AN ERROR FOR localeCompare() spelled incorrectly, be mindful of this
        } else {
            return arrivalsB - arrivalsA;
        }
    }))
    //flights;

    // PRINTING
    //The IDs of planes that remain at our airport
    console.log(`Planes left:`);
    for (const p of landedPlanes) {
        console.log(`- ${p}`);
    }
    
    //A list of towns with the number of arrivals and departures for each town, and all unique IDs of the planes that made the flights. 
    for (const [townName, townData] of flights) {
        console.log(townName);
        console.log(`Arrivals: ${townData.arrivals}`);
        console.log(`Departures: ${townData.departures}`);
        console.log('Planes:');
        let sortedPlanes = [...townData.uniquePlanes].sort((a, b) => a.localeCompare(b));
        for (const plane of sortedPlanes) {
            console.log(`-- ${plane}`);
        }
    }
}

// airport([ "Boeing474 Madrid 300 land", "AirForceOne WashingtonDC 178 land",
// "Airbus London 265 depart", "ATR72 WashingtonDC 272 land", "ATR72 Madrid 135 depart"
// ])

// airport([ "Airbus Paris 356 land",
// "Airbus London 321 land", "Airbus Paris 213 depart", "Airbus Ljubljana 250 land"
// ])

airport([
    'RTA72 London 140 land',
    'RTA72 Brussels 240 depart',
    'RTA72 Sofia 450 land',
    'RTA72 Lisbon 240 depart',
    'RTA72 Berlin 350 land',
    'RTA72 Otava 201 depart',
    'RTA72 Haga 350 land',
    'RTA72 Otava 201 depart',
    'RTA72 Dortmund 150 land',
    'RTA72 Montana 243 depart',
    'RTA72 Monreal 350 land',
    'RTA72 NewYork 201 depart',
    'RTA72 Pekin 350 land',
    'RTA72 Tokyo 201 depart',
    'RTA72 Warshaw 350 land',
    'RTA72 Riga 201 depart',
])