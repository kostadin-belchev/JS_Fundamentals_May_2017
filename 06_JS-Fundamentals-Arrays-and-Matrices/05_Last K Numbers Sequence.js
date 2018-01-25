function lastKNumsSequence (n, k) {
    //let [n, k] = params;
    let result = [];
    result.push(1);

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i;
        let sumOfLast3 = result.slice(start, end).reduce((a,b) => a + b);
        result.push(sumOfLast3);
    }

    return result.join(" ");
}

console.log(lastKNumsSequence(6, 3));
// let result = [1, 2, 3, 4, 5, 6];
// console.log(result.slice(1, 3));
