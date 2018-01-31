function lowestPriceInCities (array) {
    let products = new Map();
    for (const row of array) {
        let [townName, productName, productPrice] = row.split(' | ');
        //If you receive the same town and product more than once, you should update the old value with the new one.
        if (products.has(productName)) {
            if (products.get(productName)[0] === townName) {
                products.delete(productName);
            }
        }
        // verify if the product exists
        if (!products.has(productName)) {
            products.set(productName, [])
            products.get(productName).push(townName, productPrice);
        }
        
        // if we arrive at this point we know the product exists for sure and we have updated it's price
        
    }
    products;
}

lowestPriceInCities([
'Sample Town | Sample Product | 2000',
'Sample Town | Sample Product | 7',
'Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'Sofia | Peach | 1',
'Sofia | Peach | 0',
'Sofia | Peach | 7',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'
])