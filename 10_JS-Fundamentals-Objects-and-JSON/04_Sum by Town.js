function sumByTown (array = '') {
    let sums = {};
    for (let i = 0; i < array.length; i+=2) {
        let town = array[i]; 
        let currTownIncome = Number(array[i + 1]);

        if (!sums.hasOwnProperty(town)) {
            sums[town] = currTownIncome;
        } else
            sums[town] += currTownIncome;
    }
    return JSON.stringify(sums);
}
console.log(sumByTown(
    ['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4',]));