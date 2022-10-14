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
let password = "";
let charOptions = [];
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let passwordLength = prompt("how long do you want the password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Size not permitted.");
  }

  for (let i = 0; i < passwordLength; i++) {
    const passwordCharsLowRandom = Math.floor(
      Math.random() * charsLower.length
    );
    const selectedCharLower = charsLower[passwordCharsLowRandom];
    
    
    password = password + charOptions;
  }

  let passwordCharsLow = prompt(
    "Would you like to include lowercase characters?"
  );
  if (passwordCharsLow === true) {
    charOptions = charOptions.concat(charsLower);
    window.alert("Lowercase characters added.");
    console.log(charOptions)
  }
  console.log(password)
  if (passwordCharsLow === false) {
    window.alert("Lowercase characters dismissed.");
    return;
  }
  let passwordCharsUpp = prompt(
    "Would you like to include uppercase characters?"
  );

  if (passwordCharsUpp === true) {
    charOptions = charOptions.concat(charsUpp);
    window.alert("Uppercase characters added.");
  }

  console.log(charOptions)
  if (passwordCharsUpp === false) {
    window.alert("Uppercase characters dismissed.");
    return
  }

  let passwordCharsNum = prompt(
    "Would you like to include numeric characters?"
  );
  if (passwordCharsNum === "yes") {
    window.alert("Uppercase characters added.");
  }
  if (passwordCharsNum === "no") {
    window.alert("Uppercase characters dismissed.");
  }

  let passwordCharsSpecial = prompt(
    "Would you like to include special characters?"
  );
  if (passwordCharsSpecial === "yes") {
    window.alert("Special characters added.");
  }
  if (passwordCharsSpecial === "no") {
    window.alert("Special characters dismissed.");
  }

}

let passwordCharsNumRandom = Math.floor(Math.random() * charsNum.length);
var selectedCharNum = charsNum[passwordCharsNumRandom];
//Character special random selector
let passwordCharsSpecialRandom = Math.floor(Math.random() * charsSpecial.length);
var selectedCharSpecial = charsSpecial[passwordCharsSpecialRandom];
//Character upper random selector
let passwordCharsUpperRandom = Math.floor(Math.random() * charsUpp.length);
var selectedCharUpper = charsUpp[passwordCharsUpperRandom];



// let RandomisePassword = function RandomisePassword(length) {
//   let result = " ";
//   const passwordLength = charsLower.length;
//   for (let i = 0; i < length; i++) {
//     result += charsLower.charAt(Math.floor(Math.random() * passwordLength));
//   }

//   return result;
// };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* var Hello = "Hello";
var Goodbye = "bye";

var HelloGoodbye = Hello + Goodbye;
console.log(HelloGoodbye);
*/

//passwordRandom = selectedCharLower + selectedCharNum + selectedCharSpecial + selectedCharUpper;

