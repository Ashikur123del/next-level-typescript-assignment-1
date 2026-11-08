"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
const multiplyValueUser = multiplyValue(10, 2);
console.log(multiplyValueUser);
