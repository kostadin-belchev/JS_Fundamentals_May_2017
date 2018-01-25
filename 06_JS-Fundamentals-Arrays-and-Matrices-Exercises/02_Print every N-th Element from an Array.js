function printEvertyNthElement (array) {
    let step = Number(array.pop());
    //console.log(array);
    
    for (let i = 0; i < array.length; i += step) {
        let element = array[i];
        console.log(element);
    }
}

printEvertyNthElement(
    ['5',
    '20',
    '31',
    '4',
    '20',
    '2'
    ])
