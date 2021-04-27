// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Hrak",
//   age: 23,
//   hobbies: ["Sport", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Hrak",
  age: 23,
  hobbies: ["Sport", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: any[];
favoriteActivities = ["Sports", 1];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
