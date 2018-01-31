function lowestPriceInCities (array) {
    let products = new Map();
    for (const row of array) {
        let [productTown, productName, productPrice] = row.split(' | ');
        //If you receive the same town and product more than once, you should update the old value with the new one.
        if (!products.has(productName)) {
            products.set(productName, new Map())
        }
        products.get(productName).set(productTown, Number(productPrice))
    }
    for (const [product, townPriceKVPs] of products) {
        let lowestKVP = [...townPriceKVPs].sort((a, b) => { 
            
            if (a[1] > b[1])
                return 1;
            else
                return -1;
        });
        console.log(`${product} -> ${lowestKVP[0][1]} (${lowestKVP[0][0]})`);
        // // Alternatively we can use 
        // let lowestKVP = [...townPriceKVPs].reduce(function (a, b) { 
        //     if (a[1] > b[1]) return b;
        //     else return a; 
        // });
        // lowestKVP;
        // console.log(`${product} -> ${lowestKVP[1]} (${lowestKVP[0]})`); 
    }
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
'New York | Sample Product | 1000.1',
'New York | Burger | 10'
])