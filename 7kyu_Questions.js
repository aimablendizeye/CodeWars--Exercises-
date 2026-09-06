
// Q 1 

// In programming you know the use of the logical negation operator (!), it reverses the meaning of a condition.

// !false = true
// !!false = false
// Your task is to complete the function 'negationValue()' that takes a string of negations with a value and returns what the value would be if those negations were applied to it.

// negationValue("!", false); //=> true
// negationValue("!!!!!", true); //=> false
// negationValue("!!", []); //=> true
// Do not use the eval() function or the Function() constructor in JavaScript.

// Note: Always return a boolean value, even if there're no negations.


// 1 first approach 


function negativeValue(string, value) {
  return string.length % 2 ? !value : !!value;
}


// 2nd Appoach 

function negativeValue (string , value) {
     if (string.length %2 ===0 && value === false) {
      return false;
     }
     if (string.length %2 !==0 && value === true) {
      return false;
     }
     if (string.length %2 !==0 && typeof value !== "boolean") {
      return false;
     }
    else {
      return true;
    }

}

console.log(negativeValue("!!!", []));