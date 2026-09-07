
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


//  Q 3 

// A new school year is approaching, which also means students will be taking tests.

// The tests in this kata are to be graded in different ways. A certain number of points will be given for each correct answer and a certain number of points will be deducted for each incorrect answer. For ommitted answers, points will either be awarded, deducted, or no points will be given at all.

// Return the number of points someone has scored on varying tests of different lengths.

// The given parameters will be:

// An array containing a series of 0s, 1s, and 2s, where 0 is a correct answer, 1 is an omitted answer, and 2 is an incorrect answer.
// The points awarded for correct answers
// The points awarded for ommitted answers (note that this may be negative)
// The points deducted for incorrect answers (hint: this value has to be subtracted)
// Note: The input will always be valid (an array and three numbers)

// Examples
// #1:

// [0, 0, 0, 0, 2, 1, 0], 2, 0, 1  -->  9
// because:

// 5 correct answers: 5*2 = 10
// 1 omitted answer: 1*0 = 0
// 1 wrong answer: 1*1 = 1
// which is: 10 + 0 - 1 = 9

// #2:

// [0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)  -->  3
// because: 4*3 + 3*-1 - 3*2 = 3



function scoring (arr,a,b,c) {
    let countCorr =0;
    let omitted = 0;
    let wrong = 0;
    

    for (let i=0; i<arr.length; i++) {
      if (arr[i] == 0){
        countCorr ++;
      }
       if (arr[i] == 1){
        omitted ++;
      }

       if (arr[i] == 2){
        wrong ++;
      }
      
    }
    let correct = countCorr * a;
    let omitting  = omitted * b;
    let wronging = wrong * c;

    return correct + omitting - wronging;

  
}

console.log(scoring([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2));