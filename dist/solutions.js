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
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
// console.log(getPopularCourses(courses, 80))
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();
console.log(manager.getDetails());
console.log(manager.getRoleInfo());
