function distanceBetweenTwoPointsIn3DSpace(arr) {
    //parting to numbers
    arr.forEach(element => {
            element = Number(element);
        });
    
    let [x1, y1, z1, x2, y2, z2] = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]];

    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    let deltaZ = z2 - z1;
    
    distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
    
    return distance;
}

console.log(distanceBetweenTwoPointsIn3DSpace([1, 0, 1, 4, -2, 2]));

// // load math.js external package http://mathjs.org/docs/getting_started.html
//         var math = require('mathjs');
//         arr.forEach(element => {
//             element = Number(element);
//         });
//         //console.log(arr);
        
//         let [x1, y1, z1, x2, y2, z2] = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]];
//         // use math.js
//         return math.distance([x1, y1, z1], [x2, y2, z2]);