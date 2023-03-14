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

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  var passwordLength;
  var containLowercase;
  var containUppercase;
  var containNumeric;
  var containSpecial;

  // Function to prompt user for password options

  // get password length
  passwordLength = prompt(
    "How many characters would you like your password to contain? (between 8 and 128 characters)"
  );
  // converting passwordlength from string to number
  passwordLength = parseInt(passwordLength);

  // check passwordLength validity
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please choose a number between 8 and 128 characters");
    return generatePassword();
  }
  containLowercase = confirm("Click OK to include lowercase characters.");
  containUppercase = confirm("Click OK to include uppercase characters.");
  containNumeric = confirm("Click OK to include numeric characters.");
  containSpecial = confirm("Click OK to include special characters.");

  console.log(passwordLength);

  // This while loop will keep running as long as the user has not selected any character types for their password. It uses a series of confirm() functions to prompt the user to select whether they want to include lowercase, uppercase, numeric, and/or special characters//
  if (
    !containLowercase &&
    !containUppercase &&
    !containNumeric &&
    !containSpecial
  ) {
    alert("Please select at least one character type.");
    return generatePassword();
  }
  //This part of the code is an empty object called passwordOptions, then assigns values to its properties one at a time. The parseIn function is used to convert the passwordLength string to an integer before assigning it to the length property.//
  var finalPasswordCharacterPool = [];
}

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
