function jansNotation (array = []) {
    let operands = [];
    let errorThrown = false;

    for (const element of array) {
        if (Number.isInteger(element)) {
            operands.push(element);
        } else {
            let operator = element;
            if (operator == '+') {
                if (operands.length >= 2) {
                    let num1 = operands.pop();
                    let num2 = operands.pop();
                    operands.push(num2 + num1);
                } else {
                    console.log(`Error: not enough operands!`);
                    return;
                }
            } else if (operator == '-') {
                if (operands.length >= 2) {
                    let num1 = operands.pop();
                    let num2 = operands.pop();
                    operands.push(num2 - num1);
                } else {
                    console.log(`Error: not enough operands!`);
                    return;
                }
            } else if (operator == '*') {
                if (operands.length >= 2) {
                    let num1 = operands.pop();
                    let num2 = operands.pop();
                    operands.push(num2 * num1);
                } else {
                    console.log(`Error: not enough operands!`);
                    return;
                }
            } else if (operator == '/') {
                if (operands.length >= 2) {
                    let num1 = operands.pop();
                    let num2 = operands.pop();
                    operands.push(num2 / num1);
                } else {
                    console.log(`Error: not enough operands!`);
                    return;
                }
            }
        }
    }

    // check operand numbers or result at the end
    if (operands.length == 1) {
        console.log(operands[0]);
    } else {
        console.log('Error: too many operands!');
    }
}

jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
   
   )