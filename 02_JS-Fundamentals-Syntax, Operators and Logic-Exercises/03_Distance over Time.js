function distanceOverTime (arr) {
    let [velocity1, velocity2, time] = [arr[0], arr[1], arr[2]];
    velocity1 = velocity1 * 1000 / 3600; //speed in meters per second
    velocity2 = velocity2 * 1000 / 3600; //speed in meters per second
    let distance1 = velocity1 * time; //distnace in meters
    let distance2 = velocity2 * time; //distance in meters
    let delta = Math.abs(distance1 - distance2);
    return delta;
}

console.log(distanceOverTime([0, 60, 3600]));