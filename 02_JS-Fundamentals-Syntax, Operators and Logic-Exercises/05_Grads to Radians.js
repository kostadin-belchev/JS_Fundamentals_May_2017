function gradsToDegrees (grads) {
    let degrees = grads * 0.9;
    if (degrees >= 0 && degrees < 360) {
        return degrees;
    }
    else if (degrees >= 360) {
        return degrees = degrees % 360;
    } else if (degrees < 0 && degrees > -360) {
        return 360 - Math.abs(degrees);
    } else if (degrees <= -360) {
        degrees = degrees % 360;
        return 360 - Math.abs(degrees);
    }
}

console.log(gradsToDegrees(-450));

