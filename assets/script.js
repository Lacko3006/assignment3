// Assignment Code
var generateBtn = document.querySelector("#generate");


const unanswered = "Character not selected."
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
  let passwordLength = prompt("Please enter your password, this should be between 8 & 128 characters long.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Size not permitted.");
    return charOptions;
  }

  let passwordCharsLow = window.confirm(
    "Would you like to include lowercase characters? Please select Cancel or OK."
  );
  if (passwordCharsLow == true) {
    charOptions = charOptions.concat(charsLower);
    window.alert("Lowercase characters added.");
  } if (passwordCharsLow == false) {
    window.alert("Lowercase characters dismissed.");
  } 

  let passwordCharsUpp = window.confirm(
    "Would you like to include uppercase characters? Please select Cancel or OK."
  );
  if (passwordCharsUpp == true) {
    charOptions = charOptions.concat(charsUpp);
    window.alert("Uppercase characters added.");
  }
  if (passwordCharsUpp == false) {
    window.alert("Uppercase characters dismissed.");
  }

  let passwordCharsNum = window.confirm(
    "Would you like to include numeric characters? Please select Cancel or OK."
  );
  if (passwordCharsNum == true) {
    charOptions = charOptions.concat(charsNum);
    window.alert("Number characters added.");
  }
  if (passwordCharsNum == false) {
    window.alert("Number characters dismissed.");
  }

  let passwordCharsSpecial = window.confirm(
    "Would you like to include special characters? Please select Cancel or OK."
  );

  if (passwordCharsSpecial == true) {
    charOptions = charOptions.concat(charsSpecial);
    window.alert("Special characters added.");
  } 
  if (passwordCharsSpecial == false) {
    window.alert("Special characters dismissed.");
  }
  
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password + i + "";
    var randomCharOptions = Math.floor(Math.random() * charOptions.length);
    var selectedCharOptions = charOptions[randomCharOptions];
    password = password + selectedCharOptions;
  }
  alert(password);
  return password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
