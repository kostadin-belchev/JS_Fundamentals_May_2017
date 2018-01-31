function addOrRemove (array) {
    let result = [];
    //let counter = 0;
    for (let i = 0; i <= array.length; i++) {
        const element = array[i];
        if (element == 'add') {
            result.push(i + 1);
            //counter++;
        }
        if (element == 'remove') {
            result.pop();
        }
    }
    if (result.length > 0) {
        return result.join('\n')
    } else
        return 'Empty'
}

console.log(addOrRemove(['add',
    'add',
    'add',
    'add',
    ]));

    console.log(addOrRemove(['add',
        'add',
        'remove',
        'add',
        'add',
        ]));
    console.log(addOrRemove(['remove',
        'remove',
        'remove',
        ]));
    