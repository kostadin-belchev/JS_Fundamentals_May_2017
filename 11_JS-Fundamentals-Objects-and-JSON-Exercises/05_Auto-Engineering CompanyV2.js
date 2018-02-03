function autoEngineeringCompany (array = []) {
    let cars = new Map();
    for (const inputLine of array) {
        let [carBrand, carModel, producedCars] = inputLine.split(' | ');
        producedCars = Number(producedCars);
        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
        }
        if (!cars.get(carBrand).has(carModel)) {
            cars.get(carBrand).set(carModel, 0);
        }
        // If we arrive at this point we have made sure to have created the carBrand and the carModel and now we have to add the produced cars
        let oldProducedCars = cars.get(carBrand).get(carModel);
        cars.get(carBrand).set(carModel, oldProducedCars + producedCars);
    }
    //cars;

    // SORTING
    // The order of printing is the order in which the brands and models first appear in the input. 
    // The first brand in the input should be the first printed and so on. For each brand, the first model received from that brand, should be the first printed and so on. 
    // This means we do not need to sort

    // PRINTING
    for (const [brand, models] of cars) {
        console.log(brand);
        for (const [model, numberOfProducedCars] of models) {
            console.log(`###${model} -> ${numberOfProducedCars}`);
            
        }
    }
}

autoEngineeringCompany([
    `Audi | Q7 | 1000`,
    `Audi | Q6 | 100`,
    `BMW | X5 | 1000`,
    `BMW | X6 | 100`,
    `Citroen | C4 | 123`,
    `Volga | GAZ-24 | 1000000`,
    `Lada | Niva | 1000000`,
    `Lada | Jigula | 1000000`,
    `Citroen | C4 | 22`,
    `Citroen | C5 | 10`
    ])