function squareOfStars (n = 5) {
    let figure = '';
    for (let i = 1; i <= n; i++) {
        figure += '*'.repeat(n) + "\n";
    }
    return figure;
}

console.log(squareOfStars(4));
console.log(squareOfStars());
