// Q-1) Write a function that would allow you to do this.
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
// You can create a closure to keep the value passed to the function createBase even after the inner
// function is returned. The inner function that is being returned is created within an outer function,
// making it a closure, and it has access to the variables within the outer function

// I defined a function name "outer" wihtout any parameter
function outer() {
  // I created a veriable name "base" with the value of 6
  let base = 6;
  console.log("\nThe base value is:", base);

  // inside outer I created another function name "inner" with parametr "m"
  function inner(m) {
    // I simply printed the m and added the base value in it
    console.log("The parameter of inner function is:", m);
    console.log("\nThe output value after function call is:");
    console.log(m + base);
  }
  // I returned the function outside inner function
  return inner;
}

// defined a veriable name "addSix" thst contains full body of "outer function"
let addSix = outer();
// then I called the function Outer and Inner at the same time and provided the value of inner function
addSix(21);
