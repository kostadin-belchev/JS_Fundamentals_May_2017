function storeCaltalogue (array) {
    let products = new Map();
    // reading input and storing in in a Map since we have not duplicate entries
    for (const line of array) {
        let [productName, productPrice] = line.split(' : ');
        productPrice = Number(productPrice);
        products.set(productName, productPrice);
    }

    //sorting
    let sortedProducts = [...products].sort((a, b) => {
        let stringA = a[0].toLowerCase();
        let stringB = b[0].toLowerCase();
        return stringA.localeCompare(stringB);
    })
    //sortedProducts;
    //product grouping by first letter
    let firstLettersSet = new Set();
    for (const [product, price] of sortedProducts) {
        let firstLetter = product[0];
        firstLettersSet.add(firstLetter);
    }
    let arrayOfLetters = [];
    for (const letter of firstLettersSet) {
        arrayOfLetters.push(letter);
    }

    //printing
    for (const letter of arrayOfLetters) {
        console.log(letter);
        for (const [product, price] of sortedProducts) {
            if (product[0] == letter){
                console.log(`\t${product}: ${price}`);
            }
        }
    }
    
}

storeCaltalogue([
`Banana : 2`,
`Rubic's Cube : 5`,
`Raspberry P : 4999`,
`Rolex : 100000`,
`Rollon : 10`,
`Rali Car : 2000000`,
`Pesho : 0.000001`,
`Barrel : 10`
])