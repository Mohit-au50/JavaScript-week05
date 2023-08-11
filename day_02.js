// Q-1) Write a curryfied function for the following function:
// function fun(a,b,c)
// {
// return a+b+c
// }

// I have declared a function name "fun" with a parameter "a"
function fun(a) {
  // printed the value of "a"
  console.log("the parameter a value is:", a);

  // declared another function name "valueB" with a paramter "b"
  function valueB(b) {
    // printed the value of "b"
    console.log("the parameter b value is:", b);

    // declared another function name "valueC" with a parametr "c"
    function valueC(c) {
      // printer the value of "c"
      console.log("the parameter c value is:", c);
      // valueC function is returning all the parameter and added them into one number
      return a + b + c;
    }
    // outside valueC & Inside valueB function I'm returning the valueC variable/function-name
    return valueC;
  }
  // outside valueB & Inside fun function I'm returning the valueB variable/function-name
  return valueB;
}

// declared a variable name "output" and saaved the fun function full body with all parameter inside it
let output = fun(5)(7)(9);
// printed the return value of fun funtion
console.log("The output value of 'a+b+c' is:", output);
