let inventors = [
  { first: "Vitaly", last: "Abalakov", year: "1906", death: "1986" },
  { first: "Charles", last: "Best", year: "1899", death: "1978" },
  { first: "Lucio", last: "Bini", year: "1857", death: "1911" },
  { first: "Alan", last: "Blenkinsop", year: "1783", death: "1831" },
  { first: "Nils", last: "Bohlin", year: "1920", death: "2002" },
  { first: "Sarah", last: "Boone", year: "1832", death: "1908" },
  { first: "Charlie", last: "Booth", year: "1903", death: "2008" },
];

let peoples = [
  "Ananya",
  "Milne",
  "Sahra",
  "Palmer",
  "Teejay",
  "Oliver",
  "Layla",
  "Wallis",
  "Aarav",
  "Conway",
  "Seren",
  "Allison",
  "Cruz",
  "Atkins",
  "Samirah",
  "Solomon",
  "Alisha",
  "Reynolds",
  "Elowen",
  "Sampson",
];

let ninth = inventors.filter(
  (person) => person.year > 1800 && person.death < 2000
);

let names = inventors.map((name) => `${name.first} ${name.last}`);

// console.table(ninth);
// console.log(names);

let ordered = inventors.sort(function (a, b) {
  if (a.first > b.first) return 1;
  return -1;
});

let age = inventors.reduce((age, curr) => {
  age.push([curr.first, curr.death - curr.year]);
  return age;
}, []);

let arrowOrder = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

let olders = inventors.sort((a, b) =>
  a.death - a.year > b.death - b.year ? 1 : -1
);

let data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

let items = data.reduce((total, curr) => {
  if (total.hasOwnProperty(curr)) total[curr] += 1;
  else total[curr] = 0;
  return total;
}, {});

console.log(items);

// console.table(ordered);
// console.table(arrowOrder);
// console.table(age);
// console.table(olders);
