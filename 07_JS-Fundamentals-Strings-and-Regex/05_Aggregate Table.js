function townsAndIncomes (array) {
    let sumOfIncomes = 0;
    let towns = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i]; // each row
        let rowTokens = element.split("|").filter( e => e!='');
        // now we have to trim the whitespaces from each element
        let townName = rowTokens[0].trim();
        let townIncome = Number(rowTokens[1]); // the Number seems to trim the whitespaces from the number
        towns.push(townName);
        sumOfIncomes += townIncome;
    }
    console.log(towns.join(', '));
    console.log(sumOfIncomes);
}

townsAndIncomes(
    ['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);
