// Adapter for Problem 2
function adapter(input, code) {
    let operands = ['+', '-', '*', '/'];
    return code(input.map(i => operands.includes(i) ? i : Number(i)));
}

function runTests(zero=false) {
    const fs = require('fs');
    let code = eval('(' + fs.readFileSync('./solution.js', 'utf-8') + ')');
    let n = 10;

    for (let i = 1; i <= n; i++) {
        let test = '';
        try {
            test = fs.readFileSync(`./tests/test.${zero === true ? '000.' : ''}${('000' + i).substr(-3)}.in.txt`, 'utf-8');
        } catch (err) {
            continue;
        }
        test = test.split('\r\n');

        console.log(`-- Test ${i}:`);
        console.log(test);
        console.log('\n-- Result --');
        adapter(test, code);
        console.log('\n');
    }
}

runTests(true);
runTests();