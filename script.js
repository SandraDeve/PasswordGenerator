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
function getRandom(array, passwordLength) {
  var password = "";

  // for the total length of the password(integer chose by the user) choose a random character from the array and containate that to above variable

  for (let index = 0; index < pwLength; index++) {
    password += array[Math.floor(Math.random() * array.length)];
  }
  return password;
}

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

  // alert user if they don't choose any characters//
  if (
    !containLowercase &&
    !containUppercase &&
    !containNumeric &&
    !containSpecial
  ) {
    alert("Please select at least one character type.");
    return generatePassword();
  }
  //Creating pool of characters based on user choices//
  var finalPasswordCharacterPool = [];

  if (containLowercase) {
    finalPasswordCharacterPool.push(...lowerCasedCharacters);
  }
  if (containUppercase) {
    finalPasswordCharacterPool.push(...upperCasedCharacters);
  }
  if (containNumeric) {
    finalPasswordCharacterPool.push(...numericCharacters);
  }
  if (containSpecial) {
    finalPasswordCharacterPool.push(...specialCharacters);
  }

  return getRandom(finalPasswordCharacterPool, passwordLength);
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
