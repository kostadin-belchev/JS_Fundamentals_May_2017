function cappyJuice (array = []) {
    let juices = new Map();
    let bottles = new Map();

    for (let i = 0; i < array.length; i++) {
        let juiceTokens = array[i].split(' => ');
        let juiceName = juiceTokens[0];
        let juiceQuantity = Number(juiceTokens[1]);

        if (!juices.has(juiceName)) {
            juices.set(juiceName, 0);
        }
        let oldQuantity = juices.get(juiceName);
        juices.set(juiceName, oldQuantity + juiceQuantity);

        if (juices.get(juiceName) >= 1000) {
            if (!bottles.get(juiceName)){
                bottles.set(juiceName, 0);
            }
            let juiceLeft = juices.get(juiceName) % 1000;
            let numberOfNewBottles = Math.floor(juices.get(juiceName) / 1000);
            let numberOfOldBottles = bottles.get(juiceName);
            bottles.set(juiceName, numberOfOldBottles + numberOfNewBottles);
            juices.set(juiceName, juiceLeft);
        }
    }
    // printing
    for (const [juice, numOfBottles] of bottles) {
        console.log(`${juice} => ${numOfBottles}`);
    }
}

cappyJuice([
 'Kiwi => 234',
 'Pear => 2345',
 'Watermelon => 3456',
 'Kiwi => 4567',
 'Pear => 5678',
 'Watermelon => 6789'
    ])