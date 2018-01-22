function firstAndLastKNums (array) {
    let k = array.shift();
    //let array = [arr];
    let firstKElements = array.slice(0, k);
    let lastKElements = array.slice(array.length - k);
    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}

firstAndLastKNums([2,
    7, 8, 9]
   );
firstAndLastKNums([3,
    6, 7, 8, 9]
   );