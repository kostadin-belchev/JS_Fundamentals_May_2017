function smallestTwoNumsOfArray (array) {
    return array.sort( (a,b) => a - b).slice(0, 2).join(' ');
}

console.log(smallestTwoNumsOfArray([30, 15, 50, 5]));
