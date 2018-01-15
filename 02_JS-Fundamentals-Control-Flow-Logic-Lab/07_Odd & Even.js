function oddEven (num) {
    num = Number(num);
    if ((num % 2) == 0) {
        return "even";
    }
    else if (Math.abs(num % 2) == 1) {
        return "odd";
    }
    else {
        return "invalid";
    }
}

console.log(oddEven(5));
console.log(oddEven(8));
console.log(oddEven(1.5));


