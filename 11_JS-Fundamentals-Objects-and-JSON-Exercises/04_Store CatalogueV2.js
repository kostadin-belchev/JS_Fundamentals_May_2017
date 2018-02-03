function storeCatalogue (array = []) {
    // READING AND STORING DATA
    let products = new Map();
    let productsLettersSet = new Set();
    for (const inputLine of array) {
        let [productName, productPrice] = inputLine.split(' : ');
        productPrice = Number(productPrice);
        products.set(productName, productPrice);//+ '|' + firstLetterOfProduct

        let firstLetterOfProduct = productName[0];
        productsLettersSet.add(firstLetterOfProduct);
    }
    //products;

    // SORTING & MANUPULATING
    products = new Map([...products].sort((a, b) => {
        let productA = a[0].toLowerCase();
        let productB = b[0].toLowerCase();
        return productA.localeCompare(productB);
    }));
    productsLettersSet = [...productsLettersSet].sort();
    
    //PRINTING
    for (const letter of productsLettersSet) {
        console.log(letter);
        for (const [product, price] of products) {
            if (letter == product[0]) {
                console.log(`  ${product}: ${price}`);
            }
        }
    }
}

storeCatalogue([
    `Banana : 2`,
    `Rubic's Cube : 5`,
    `Raspberry P : 4999`,
    `Rolex : 100000`,
    `Rollon : 10`,
    `Rali Car : 2000000`,
    `Pesho : 0.000001`,
    `Barrel : 10`
    ])