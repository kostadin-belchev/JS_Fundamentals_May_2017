function pointInRectangle (array) {
    // short input
    let [x, y, xMin, xMax, yMin, yMax] = array;
    //or longer version
    // let x = array[0];
    // let y = array[1];
    // let xMin = array[2];
    // let xMax = array[3];
    // let yMin = array[4];
    // let yMax = array[5];
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        return 'inside';
    }
    else {
        return 'outside';
    }
}

console.log(pointInRectangle([8, -1, 2, 12, -3, 3]));
console.log(pointInRectangle([12.5, -1, 2, 12, -3, 3]));

