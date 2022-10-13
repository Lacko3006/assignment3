// Assignment Code
var generateBtn = document.querySelector("#generate");

const charsNum = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charsSpecial = "!@#$%^&*()";
const charsUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charsLower = "abcdefghijklmnopqrstuvwxyz";
const password = "";

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

  let passwordCharsLow = prompt(
    "Would you like to include lowercase characters?"
  );
  if (passwordCharsLow === "yes") {
    window.alert("Lowercase characters added.");
  }
  if (passwordCharsLow === "no") {
    window.alert("Lowercase characters dismissed.");
  }

  let passwordCharsUpp = prompt(
    "Would you like to include uppercase characters?"
  );
  if (passwordCharsUpp === "yes") {
    window.alert("Uppercase characters added.");
  }
  if (passwordCharsUpp === "no") {
    window.alert("Uppercase characters dismissed.");
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

function passwordRandom(){

}


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

var Hello = "Hello";
var Goodbye = "bye";

var HelloGoodbye = Hello + Goodbye;
console.log(HelloGoodbye);
