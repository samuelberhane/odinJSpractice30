// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
let currentYear = new Date().getFullYear();
console.log(currentYear);

let some = people.some((person) => {
  return currentYear - person.year >= 19;
});
console.log(some);

// Array.prototype.every() // is everyone 19 or older?
let every = people.every((person) => {
  return currentYear - person.year >= 19;
});
console.log(every);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
let comment = comments.find((comment) => {
  return comment.id == 823423;
});

console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
let index = comments.findIndex((comment) => {
  return comment.id == 823423;
});

console.log(index);
console.table(comments);
comments.splice(index, 1);
console.table(comments);
