function tripLength (params) {
    let [x1, y1, x2, y2, x3, y3] = params;
    let point1 = { x:x1, y:y1, ID: 1};
    let point2 = { x:x2, y:y2, ID: 2};
    let point3 = { x:x3, y:y3, ID: 3};

    let distacePoint1ToPoint2 = distanceBetweenTwoPoints(point1, point2);
    let distacePoint2ToPoint3 = distanceBetweenTwoPoints(point2, point3);
    let distacePoint3ToPoint1 = distanceBetweenTwoPoints(point1, point3);

    let path1 = {d: (distacePoint1ToPoint2 + distacePoint2ToPoint3), id: '1->2->3'}; // path1 is 1->2->3
    let path2 = {d: (distacePoint3ToPoint1 + distacePoint2ToPoint3), id: '1->3->2'}; // path2 is 1->3->2
    let path3 = {d: (distacePoint1ToPoint2 + distacePoint3ToPoint1), id: '2->1->3'}; //path3 is 2->1->3

    let minDistance = [distacePoint1ToPoint2, distacePoint2ToPoint3, distacePoint3ToPoint1].sort((a,b) => a - b).slice(0, 2).reduce((a,b) => a + b);
    
    if ((distacePoint1ToPoint2 <= distacePoint3ToPoint1) && (distacePoint1ToPoint3 => distacePoint2ToPoint3)) {
        return `${path1.id}: ${minDistance}`;
    } else if((distacePoint1ToPoint2 <= distacePoint2ToPoint3) && (distacePoint3ToPoint1 < distacePoint2ToPoint3)) {
        return `${path3.id}: ${minDistance}`;
    } else {
        return `${path2.id}: ${minDistance}`;
    }

    function distanceBetweenTwoPoints (point1, point2) {
        let a = point1.x - point2.x;
        let b = point1.y - point2.y;
        return Math.sqrt(a*a + b*b);
    }
}

// console.log(tripLength([-1, -2, 3.5, 0, 0, 2]));
// console.log(tripLength([5, 1, 1, 1, 5, 4]));
// console.log(tripLength([0, 0, 2, 0, 4, 0]));


