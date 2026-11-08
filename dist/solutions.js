"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
const multiplyValueUser = multiplyValue(10, 2);
// console.log(multiplyValueUser)
const processInput = (input) => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else {
        return input ? "Active" : "Inactive";
    }
};
// console.log(processInput(true))
const formatCoordinate = (coord) => {
    return `Location: ${coord[2]} (${coord[0]}, ${coord[1]})`;
};
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
const concatenateArrays = (...arrays) => {
    return [].concat(...arrays);
};
// Function call kora ebong result console.log-e dewa:
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
