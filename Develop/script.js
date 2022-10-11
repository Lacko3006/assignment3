// Assignment Code
var generateBtn = document.querySelector("#generate");

var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var passwordLength = 12;
 var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// at least 8 characters no more than 128

function generatePassword(){
  let passwordPrompt = prompt("Password criteria, would you like to continue")

  return passwordPrompt;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);