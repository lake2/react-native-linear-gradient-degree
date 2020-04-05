// https://github.com/react-native-community/react-native-linear-gradient
export function deg(degree: number) {
    if (typeof degree !== "number" || Math.abs(degree) === Infinity) throw new Error("wrong degree value");
    while (degree < 0) {
        degree += 360;
    }
    degree %= 360;
    if (degree === 0) {
        return res([0.5, 1], [0.5, 0]);
    } else if (degree === 45) {
        return res([0, 1], [1, 0]);
    } else if (degree === 90) {
        return res([0, 0.5], [1, 0.5]);
    } else if (degree === 135) {
        return res([0, 0], [1, 1]);
    } else if (degree === 180) {
        return res([0.5, 0], [0.5, 1]);
    } else if (degree === 225) {
        return res([0, 1], [1, 0]);
    } else if (degree === 270) {
        return res([0, 0.5], [1, 0.5]);
    } else if (degree === 315) {
        return res([1, 0], [0, 0]);
    }
    if (0 < degree && degree < 45) {
        const arc = Math.PI / (180 / degree);
        return res([0.5 - Math.tan(arc) * 0.5, 1], [0.5 + Math.tan(arc) * 0.5, 0]);
    } else if (45 < degree && degree < 90) {
        const arc = Math.PI / (180 / (90 - degree));
        return res([0, 0.5 + Math.tan(arc) * 0.5], [1, 0.5 - Math.tan(arc) * 0.5]);
    } else if (90 < degree && degree < 135) {
        const arc = Math.PI / (180 / (degree - 90));
        return res([0, 0.5 - Math.tan(arc) * 0.5], [1, 0.5 + Math.tan(arc) * 0.5]);
    } else if (135 < degree && degree < 180) {
        const arc = Math.PI / (180 / (45 - (degree - 135)));
        return res([0.5 - Math.tan(arc) * 0.5, 0], [0.5 + Math.tan(arc) * 0.5, 1]);
    } else if (180 < degree && degree < 225) {
        const arc = Math.PI / (180 / (degree - 180));
        return res([0.5 + Math.tan(arc) * 0.5, 0], [0.5 - Math.tan(arc) * 0.5, 1]);
    } else if (225 < degree && degree < 270) {
        const arc = Math.PI / (180 / (45 - (degree - 225)));
        return res([1, 0.5 - Math.tan(arc) * 0.5], [0, 0.5 + Math.tan(arc) * 0.5]);
    } else if (270 < degree && degree < 315) {
        const arc = Math.PI / (180 / (degree - 270));
        return res([1, 0.5 + Math.tan(arc) * 0.5], [0, 0.5 - Math.tan(arc) * 0.5]);
    } else if (315 < degree && degree < 360) {
        const arc = Math.PI / (180 / (45 - (degree - 315)));
        return res([0.5 + Math.tan(arc) * 0.5, 1], [0.5 - Math.tan(arc) * 0.5, 0]);
    } else {
        throw new Error("if error");
    }
}

function res(start: [number, number], end: [number, number]) {
    return { start: { x: start[0], y: start[1] }, end: { x: end[0], y: end[1] } };
}
