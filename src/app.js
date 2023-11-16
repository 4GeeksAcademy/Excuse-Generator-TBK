let who = [
  "The dog",
  "My grandma",
  "His turtle",
  "My bird",
  "My brother",
  "My mother",
];
let action = [
  "ate",
  "peed",
  "crushed",
  "broke",
  "destroyed",
  "burned",
  "cutted",
];
let what = [
  "my homework",
  "the keys",
  "the car",
  "my wallet",
  "my credit card",
];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
  "yesterday when i was reading",
];

function generateExcuse() {
  var whoRandom = who[Math.floor(Math.random() * who.length)];
  var actionRandom = action[Math.floor(Math.random() * action.length)];
  var whatRandom = what[Math.floor(Math.random() * what.length)];
  var whenRandom = when[Math.floor(Math.random() * when.length)];

  return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;
}

console.log(generateExcuse());
