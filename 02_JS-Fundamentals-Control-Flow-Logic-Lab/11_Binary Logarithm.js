function binaryAlgorith (arrayOfNums) {
    arrayOfNums.forEach(element => {
        console.log(Math.log2(Number(element)));
    });
}

binaryAlgorith([0, 1, 2, 3, 4, 5, 10000000300]);