const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let firstPwd = document.getElementById("firstPassword");
let secondPwd = document.getElementById("secondPassword");

function passwordGenerate() {
  let first = "";
  let second = "";
  let characters = letters;
  let pwdLength = document.getElementById("passwordLength").value;
  if (document.getElementById("includeNumbers").checked) characters = characters.concat(numbers);
  if (document.getElementById("includeSymbols").checked) characters = characters.concat(symbols);
  for (let i = 1; i <= pwdLength; i++) {
    first += characters[Math.floor(Math.random() * characters.length)];
    second += characters[Math.floor(Math.random() * characters.length)];
  }
  firstPwd.textContent = first;
  secondPwd.textContent = second;
}

function copy(text) {
  navigator.clipboard.writeText(text.textContent);
  text.textContent = "Copied!";
}
