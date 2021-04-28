"use strict";
const e1 = {
    name: "Max",
    privilleges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privilleges" in emp) {
        console.log("Privileges: " + emp.privilleges);
    }
    if ("startDate" in emp) {
        console.log("StrtDate: " + emp.startDate);
    }
}
printEmployeeInformation(e1);
