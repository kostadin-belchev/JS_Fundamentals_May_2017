function distanceBetweenPoints (x1, y1, x2, y2) {
    let firstPoint = {x: x1, y: y1};
    let secondPoint = {x: x2, y: y2};
    
    //return (Math.hypot(point2.x-point1.x, point2.y-point1.y))
    var distance = Math.sqrt(Math.pow(Math.abs(firstPoint.x - secondPoint.x), 2) + Math.pow(Math.abs(firstPoint.y - secondPoint.y), 2));
    return distance;
}
console.log(distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985));
 