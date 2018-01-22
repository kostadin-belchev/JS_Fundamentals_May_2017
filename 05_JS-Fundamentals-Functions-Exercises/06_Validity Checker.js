function isDistanceInteger (array) {
    let [x1, y1, x2, y2] = array;
    let distanceBetweenPoint1AndOrigin = distanceBetweenTwoPoints(x1, y1, 0, 0);
    let distanceBetweenPoint2AndOrigin = distanceBetweenTwoPoints(x2, y2, 0, 0);
    let distanceBetweenPoint1AndPoint2 = distanceBetweenTwoPoints(x1, y1, x2, y2);
    // check distanceBetweenPoint1AndOrigin
    if (Number.isInteger(distanceBetweenPoint1AndOrigin)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    //check distanceBetweenPoint2AndOrigin
    if (Number.isInteger(distanceBetweenPoint2AndOrigin)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    //check distanceBetweenPoint1AndPoint2
    if (Number.isInteger(distanceBetweenPoint1AndPoint2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function distanceBetweenTwoPoints (x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
    }
}

//isDistanceInteger([3, 0, 0, 4]);
//isDistanceInteger([2, 1, 1, 1]);
// function isInteger (num) {
    //     if (Math.round(num) === num)
    //         return true;
    //     else
    //         return false;
    // }