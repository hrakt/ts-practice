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

function add(a: string, b: string): string;
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add("max", "lol");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", desciription: "my own company" },
};

console.log(fetchedUserData?.job?.title);

const userInput = null;
const storedData = userInput ?? "Default";

console.log(storedData);

// type UnkownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnkownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privilleges" in emp) {
//     console.log("Privileges: " + emp.privilleges);
//   }

//   if ("startDate" in emp) {
//     console.log("StrtDate: " + emp.startDate);
//   }
// }

// // printEmployeeInformation({ name: "Hrak", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("driving a truck");
//   }

//   loadCargo(amount: number) {
//     console.log("loading cargo " + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// // useVehicle(v1);
// // useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving at speed " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 100 });

// const paragraph = document.getElementById("message-output");
// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById("user-input")
// // );
// const userInputElement = document.getElementById(
//   "user-input"
// ) as HTMLInputElement;
// userInputElement.value = "hi there";

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not valid",
//   username: "Must start with a capital character!",
// };
