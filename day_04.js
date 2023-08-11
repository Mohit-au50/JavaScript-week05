// Q-1) Write a function that would take one variable as a parameter and log on the screen using
// Template Literal Interpolation

let text = "how are you?";
// declared a function name "screenLog" with 2 parameter "strings" and "...values" wwith rest operator
function screenLog(strings, ...values) {
  // returned the parameter
  console.log("the strings are:", strings);
  console.log("the values are:", values);
  let str0 = strings[0]; // "welcome "
  let str1 = strings[1]; // "."
  return `${str0}${text}${str1}`;
}

let outputOne = screenLog`welcome, ${text}.`;
console.log("result:", outputOne);
console.log("");

// Q-2) Write a tagged function to print the following sentence: Homework must be at least 80% to
// ensure my future. Attendance must be at least 80% to ensure my success. 1 variable for
// Homework/Attendance. 1 variable for 80 (percentage). 1 variable for future/success.

// declared some variables
let one = "Homework";
let one1 = "Attendance";
let two = "80%";
let three = "future";
let three3 = "success";

// declared a function name "taggedTemplate"
function taggedTemplate(strings, ...values) {
  // printed the strings and values paraameter
  console.log("the strings are:", strings);
  console.log("the values are:", values);
  // below are the strings that are in mu output
  let str0 = strings[0]; // ' '
  let str1 = strings[1]; // ' must be at least '
  let str2 = strings[2]; // 'to ensure my '
  let str3 = strings[3]; // '.'
  let str4 = strings[4]; // ' must be at least '
  let str5 = strings[5]; // 'to ensure my '
  let str6 = strings[6]; // '.'

  // returned the strings with values
  return `${one}${str1}${two}${str2}${three}${str3}${one1}${str4}${two}${str5}${three3}${str6}`;
}

// stored the function body and parameter in "outputTwo" variable
let outputTwo = taggedTemplate`${one} must be at least ${two} to ensure my ${three}. ${one1} must be at least ${two} to ensure my ${three3}.`;
// printed the outputTwo
console.log("result:", outputTwo);
