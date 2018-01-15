function coneVolumeAndSurfaceArea (r, h) {
    let volume = Math.PI*r*r*(h/3);
    let surfaceArea = Math.PI*r*(r+Math.sqrt(h*h+r*r));
    console.log("volume = " + volume);
    console.log("area = " + surfaceArea);
}
coneVolumeAndSurfaceArea(3, 5);