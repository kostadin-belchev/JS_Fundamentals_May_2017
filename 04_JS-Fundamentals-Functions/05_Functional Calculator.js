function funcCalculator (num1, num2, operator) {
    switch (operator) {
        case '+':
            return sumTwoNums(num1, num2);
            break;
        case '-':
            return subtractTwoNums(num1, num2);
            break;
        case '*':
            return multiplyTwoNums(num1, num2);
            break;
        case '/':
            return devideTwoNums(num1, num2);
            break;
        default:
            break;
    }

    function sumTwoNums (num1, num2) {
        return num1 + num2;
    }
    function subtractTwoNums (num1, num2) {
        return num1 - num2;
    }
    function multiplyTwoNums (num1, num2) {
        return num1 * num2;
    }
    function devideTwoNums (num1, num2) {
        return num1 / num2;
    }
}

console.log(funcCalculator(2, 4, '+'));
console.log(funcCalculator(3, 3, '/'));
console.log(funcCalculator(18, -1, '*'));
