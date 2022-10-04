
var generateBtn = document.querySelector("#generate");

var pwordLength;
var conLower;
var conUpper;
var conNum;
var conSpecial;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Upper Case
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password
function writePassword() {
  var pword = generatePassword();
  var pwordText = document.querySelector("#password");

  pwordText.value = pword;
}

generateBtn.addEventListener("click", writePassword);

// Start
function generatePassword() {
  // user Input
  pwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + pwordLength);
  
  if(!pwordLength) {
    alert("Required value");

  } else if (pwordLength < 8 || pwordLength > 128) {
    pwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + pwordLength);
  
  } else { 
    conLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + conLower);
    conUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + conUpper);
    conNumber = confirm("Will this contain numbers?");
    console.log("Number " + conNumber);
    conSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + conSpecial);

  };

  // No answer then
  if (!conLower && !conUpper && !conNumber && !conSpecial) {
    userChoices = alert("You must choose a criteria");
  // 4 true 
  } else if (conLower && conUpper && conNumber && conSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }
  // 3 true 
  else if (conLower && conUpper && conNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (conLower && conUpper && conSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
  else if (conLower && conNumber && conSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (conUpper && conNumber && conSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // 2 true
  else if (conLower && conUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (conLower && conNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (conLower && conSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (conUpper && conNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (conUpper && conSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (conNumber && conSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // 1 true
  else if (conLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (conUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (conNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (conSpecial) {
    userChoices = special;
    console.log(userChoices);
  };

  // Empty var
  var pwordBlank = [];
  
  // Loop
  for (var i = 0; i < pwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    pwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join + return 
  var pword = pwordBlank.join("");
  console.log("Your Pasword is: " + pword);
  return pword;
  
}