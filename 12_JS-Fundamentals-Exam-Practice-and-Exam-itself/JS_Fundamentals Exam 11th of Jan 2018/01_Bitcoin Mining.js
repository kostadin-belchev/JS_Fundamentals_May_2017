function bitcoin (array = []) {
    array = array.map(Number);
    let dayOfFirstBitcoin = 0;
    let currBalanceMoney = 0;
    let bitcoinCount = 0;
    
    for (let i = 0; i < array.length; i++) { // i + 1 is the current day
        let minedGoldForDay = array[i];
        if ((i + 1) % 3 == 0) {
            minedGoldForDay = minedGoldForDay * 0.70;
        }
        let moneyForTheDay = minedGoldForDay * 67.51;
        currBalanceMoney += moneyForTheDay;
        while (currBalanceMoney >= 11949.16) {
            bitcoinCount++;
            currBalanceMoney -= 11949.16;
        }
        if (bitcoinCount > 0 && dayOfFirstBitcoin == 0) {
            dayOfFirstBitcoin = i + 1;
        }
    }


    // Output
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (bitcoinCount > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${currBalanceMoney.toFixed(2)} lv.`);
}

bitcoin(['100', '200', '300'])