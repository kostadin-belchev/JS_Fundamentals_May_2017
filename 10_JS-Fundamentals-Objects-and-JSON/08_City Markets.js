function cityMarkets (array) {
    let salesMap = new Map();
    for (const inputLine of array) {
        let [town, product, sales] = inputLine.split(' -> ');
        sales = sales.split(' : ').reduce((a, b) => a * b); // in the output we only need the total volume of sales, so we recude it to one value only
        // Verify if town exists
        if (!salesMap.has(town)) {
            salesMap.set(town, new Map());
        }
        // Verify if the product exists for the given town
        if (!salesMap.get(town).has(product)) {
            salesMap.get(town).set(product, 0)
        }
        // if we arrive at this point we are sure we have created the town and product if it did not exist and we have set the sales for that product at 0
        let oldSales = salesMap.get(town).get(product);
        salesMap.get(town).set(product, oldSales + sales);
    }
    //printing
    // for (const town of salesMap) {
    //     console.log(`Town - ${town[0]}`);
    //     for (const product of town[1]) {
    //         console.log(`$$$${product[0]} : ${product[1]}`);
    //     }
    // }
    // alternative printing
    for (const [town, products] of salesMap) {
        console.log(`Town - ${town}`);
        for (const [productName, sales] of products) {
            console.log(`$$$${productName} : ${sales}`);
        }
    }
}

cityMarkets([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3',
])