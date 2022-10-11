// Assignment Code
var generateBtn = document.querySelector("#generate");

var chars = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsLower = "abcdefghijklmnopqrstuvwxyz"
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
  let passwordLength = prompt("how long do you want the password to be?")
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("wrong size")
  }
  console.log(passwordPrompt)


  return passwordPrompt;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("password").value = password; 



//var Hello = 'Hello'
  //var Goodbye = 'bye'

  //var HelloGoodbye = Hello + Goodbye
  //console.log(HelloGoodbye)