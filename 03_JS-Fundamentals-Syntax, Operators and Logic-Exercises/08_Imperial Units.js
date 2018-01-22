function inchesToFeetAndInches (inches) {
    let inchesLeftOver = inches % 12;
    let feet = Math.floor(inches / 12);
    return `${feet}'-${inchesLeftOver}"`;
}

console.log(inchesToFeetAndInches(36));
console.log(inchesToFeetAndInches(55));
console.log(inchesToFeetAndInches(11));