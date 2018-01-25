function increasingSubseq (array) {
    let currBiggestNum = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element >= currBiggestNum) {
            currBiggestNum = element;
            console.log(currBiggestNum);
        }
    }
}

function ndc(arr) {
    let result = arr.filter((e, i) => e >= Math.max(...arr.slice(0, i + 1)));
  
    console.log(result.join('\n'));
}

ndc([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
    ]);
    
increasingSubseq(
    [1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
    ]);
