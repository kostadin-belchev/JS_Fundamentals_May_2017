function sumFirstAndLastElementsOfArray (array) {
    return Number(array[0]) + Number(array[array.length - 1]); // without modifying the array
    //return Number(array.shift()) + Number(array.pop()); // removing first and last element then returning the sum
}
console.log(sumFirstAndLastElementsOfArray(['20', '30', '40']));