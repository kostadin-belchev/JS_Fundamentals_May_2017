function sortby2Criteria (array = []) {
    //return array.sort().sort((a,b) => a.length - b.length).join('\n'); 
    // default sort is alphabetical and ascending order
    // the second sort sorts by length from smallest to biggest
    return array.sort((a, b) => a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase())).join('\n');

    //return array.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
}

//console.log(sortby2Criteria(['alpha',    'beta',    'gamma',    ]));

console.log(sortby2Criteria(['test',
    'Deny',
    'xray',
    'omen',
    'Default',
    ]));
    
