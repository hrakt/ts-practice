"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(this.id, this.name);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Not valid report");
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === "max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("id2", ["max"]);
// const employee = Department.createEmployee("Max");
// console.log(employee, Department.fiscalYear);
// // it.printEmployee();
// console.log(it);
// it.describe();
// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
// accounting.mostRecentReport = "New report";
// accounting.mostRecentReport;
// accounting.addReport("something went wrong");
// // accounting.getReports();
// accounting.addEmployee("max");
// accounting.addEmployee("matt");
// accounting.printEmployee();
// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
