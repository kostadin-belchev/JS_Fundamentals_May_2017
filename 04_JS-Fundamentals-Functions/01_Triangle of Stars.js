function triangleOfStars (n) {
    //first half + middle line
    let figure = '';
    for (let i = 1; i <= n; i++) {
        figure += '*'.repeat(i) + "\n";
    }

    // bottom half
    for (let i = n - 1; i >= 1; i--) {
        figure += '*'.repeat(i) + "\n";
    }
    return figure;
}

console.log(triangleOfStars(5));
