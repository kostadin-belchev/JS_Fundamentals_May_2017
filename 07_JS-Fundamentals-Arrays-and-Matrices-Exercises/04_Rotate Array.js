function rotateArray (array) {
    let n = array.pop(); // number of rotations
    n = n % array.length;
    for (let i = 0; i < n; i++) {
        const element = array.pop();
        array.unshift(element);
    }
    return array.join(' ');
}

console.log(rotateArray(['1',
    '2',
    '3',
    '4',
    '2',
    ]));
// console.log(rotateArray(['Banana',
//     'Orange',
//     'Coconut',
//     'Apple',
//     '15'
//     ]));

