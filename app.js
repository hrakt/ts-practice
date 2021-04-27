// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "Hrak",
    age: 23,
    hobbies: ["Sport", "Cooking"]
};
var favoriteActivities;
favoriteActivities = ["Sports", 1];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
