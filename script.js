// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Function to prompt user for password options

//function prompts the user to input the desired length of their password. If the user enters a number less than 8 or greater than 128, the function will continue to prompt the user until a valid length is entered. Once a valid length is entered//
function getPasswordOptions()
var passwordLength = prompt("How many characters would you like your password to contain? (between 8 and 128 characters)");
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Password length must be between 8 and 128 characters. How many characters would you like your password to contain?");
}
var includeLowercase = confirm("Click OK to include lowercase characters.");
var includeUppercase = confirm("Click OK to include uppercase characters.");
var includeNumeric = confirm("Click OK to include numeric characters.");
var includeSpecial = confirm("Click OK to include special characters.");

// This while loop will keep running as long as the user has not selected any character types for their password. It uses a series of confirm() functions to prompt the user to select whether they want to include lowercase, uppercase, numeric, and/or special characters//

while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert("Please select at least one character type.");
  includeLowercase = confirm("Click OK to include lowercase characters.");
  includeUppercase = confirm("Click OK to include uppercase characters.");
  includeNumeric = confirm("Click OK to include numeric characters.");
  includeSpecial = confirm("Click OK to include special characters.");
}
//This part of the code is an empty object called passwordOptions, then assigns values to its properties one at a time. The parseIn function is used to convert the passwordLength string to an integer before assigning it to the length property.//
var passwordOptions = {};
passwordOptions.length = parseInt(passwordLength);
passwordOptions.includeLowercase = includeLowercase;
passwordOptions.includeUppercase = includeUppercase;
passwordOptions.includeNumeric = includeNumeric;
passwordOptions.includeSpecial = includeSpecial;

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
