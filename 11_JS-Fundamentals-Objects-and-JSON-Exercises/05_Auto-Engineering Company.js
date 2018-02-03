function autoEngineeringFirm (array) {
    let carsMap = new Map();
    for (const inputLine of array) {
        let [carBrand, carModel, producedCars] = inputLine.split(' | ');
        producedCars = Number(producedCars);
        if (!carsMap.has(carBrand)) {
            carsMap.set(carBrand, new Map());
        }
        if (!carsMap.get(carBrand).has(carModel)) {
            carsMap.get(carBrand).set(carModel, 0)
        }
        // if we arrive at this point we can be sure that we have created the car brand and model if it did not exist, so we will add the produced cars to it.
        let oldProcudedCars = carsMap.get(carBrand).get(carModel);
        carsMap.get(carBrand).set(carModel, oldProcudedCars + producedCars);
    }
    //sorting is not necessary in this exercise
    //The order of printing is the order in which the brands and models first appear in the input. 
    //The first brand in the input should be the first printed and so on. For each brand, the first model received from that brand, should be the first printed and so on. 
    
    //printing
    let brandsSet = new Set();
    for (const [brand, kvp] of carsMap) {
        brandsSet.add(brand);
    }

    let arrayOfUniqueBrands = [];
    for (const brand of brandsSet) {
        arrayOfUniqueBrands.push(brand);
    }

    for (const uniqueBrand of arrayOfUniqueBrands) {
        console.log(uniqueBrand);
        for (const [brand, kvpMap] of carsMap) {
            if (brand == uniqueBrand) {
                for (const [model, cars] of kvpMap) {
                    console.log(`###${model} -> ${cars}`);
                }
            }
        }
    }
}

autoEngineeringFirm([
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