function areaOfFigure (w, h, W, H) {
    let areaOfBothFigures = (W * H) + (w * h);
    let areaOfCommonPart = (Math.min(W, w)) * (Math.min(H, h));
    let totalArea = areaOfBothFigures - areaOfCommonPart;
    return totalArea;
}