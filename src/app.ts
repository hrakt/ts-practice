type Admin = {
  name: string;
  privilleges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee,Admin {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privilleges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnkownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnkownEmployee) {
  console.log("Name: " + emp.name);
  if ("privilleges" in emp) {
    console.log("Privileges: " + emp.privilleges);
  }

  if ("startDate" in emp) {
    console.log("StrtDate: " + emp.startDate);
  }
}

console.log("hello");

printEmployeeInformation(e1);
