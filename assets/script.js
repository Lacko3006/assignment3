// Assignment Code
var generateBtn = document.querySelector("#generate");

const charsNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charsSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const charsUpp = [
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
];
const charsLower = [
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

let charOptions = [];
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

function generatePassword() {
  let passwordLength = prompt("how long do you want the password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Size not permitted.");
  }

  let passwordCharsLow = prompt(
    "Would you like to include lowercase characters?"
  );
  if (passwordCharsLow === "yes") {
    charOptions = charOptions.concat(charsLower);
    window.alert("Lowercase characters added.");
  }

  if (passwordCharsLow === "no") {
    window.alert("Lowercase characters dismissed.");
    
  }
  let passwordCharsUpp = prompt(
    "Would you like to include uppercase characters?"
  );
  if (passwordCharsUpp === "yes") {
    charOptions = charOptions.concat(charsUpp);
    window.alert("Uppercase characters added.");
  }

  if (passwordCharsUpp === "no") {
    window.alert("Uppercase characters dismissed.");
  }

  let passwordCharsNum = prompt(
    "Would you like to include numeric characters?"
  );
  if (passwordCharsNum === "yes") {
    charOptions = charOptions.concat(charsNum);
    window.alert("Number characters added.");
  }
  if (passwordCharsNum === "no") {
    window.alert("Number characters dismissed.");
  }

  let passwordCharsSpecial = prompt(
    "Would you like to include special characters?"
  );

  if (passwordCharsSpecial === "yes") {
    charOptions = charOptions.concat(charsSpecial);
    window.alert("Special characters added.");
  }

  if (passwordCharsSpecial === "no") {
    window.alert("Special characters dismissed.");
  }
  
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password + i + "";
    var randomCharOptions = Math.floor(Math.random() * charOptions.length);
    var selectedCharOptions = charOptions[randomCharOptions];
    password = password + selectedCharOptions;
  }
  console.log(password)
  alert(password);
  return password;
}}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
