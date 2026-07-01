// ES6 Questions 


 // Q 1. Find the odd numbers  and their sum , also do it on the  Even numbers then do the difference between them .



function addEvenOdd (...num) {

        let totalOdd = num.filter(item => item %2 !==0).reduce((a,b) =>a + b );
         
        let totalEven = num.filter(item => item %2 ===0).reduce((a,b) => a + b );
 
      let Diff = totalOdd - totalEven;

      return Diff;
    

}

console.log(addEvenOdd(...[1,2,3]));


// Q 2

// Write a function sumUnique that takes an array of numbers as an argument and returns the sum of the elements that appear only once in the array.

// ```jsx
// sumUnique([1, 2, 2, 3, 4, 4, 5]) // 1 + 3 + 5 => 9
// sumUnique([10, 20, 20, 30, 40, 40, 50]) // 10 + 30 + 50 => 90
// sumUniquey([5, 5, 10, 15, 20, 25, 25]) // 10 + 15 + 20 => 45
// ```


function sumUnique(arr){
    const unique = arr.filter(item => arr.indexOf(item)=== arr.lastIndexOf(item));
    return unique.reduce((a,b) => a + b,0);
}

console.log (sumUnique([1, 2, 2, 3, 4, 4, 5]));



// Q3 
 
// **Mirror Image Words**

// Write a function `isMirrorImage(str1, str2)` that checks if one string is the reverse of the other. Ignore spaces, punctuation, and capitalization.

// **Example:**

// ```jsx
// javascript
// Copy code
// isMirrorImage("Hello", "olleH"); // true
// isMirrorImage("World", "dlroW"); // true
// isMirrorImage("Test", "tseT "); // false
// ```



function isMirrorImage (str1 , str2) {
    
    const format = str =>
        str.toLowerCase()
           .split("")
           .sort()
           .join("");

    return format(str1) === format(str2);
}

console.log(isMirrorImage("listen", "silent"))

console.log(isMirrorImage("Test", "tseT "));





// Q 4 

// Write a function that takes in an array of digits and return the highest and lowest digits from it. Solve it without using `Math.max()` and `Math.min()`

// ```jsx
// highAndLow([1, 2, 3, 4, 5]);  // return 5 1
// highAndLow([1, 2, -3, 4, 5]); // return 5 -3
// highAndLow([1, 9, 3, 4, -5]); // return 9 -5
// ```


function highAndLow (arr) {
    let high = arr[0];
    let low = arr[0];

    for (let i=1; i<arr.length; i++){
        if (arr[i] > high) {
            high = arr[i];
        }

        if ( arr[i] < low){
            low = arr[i];
        
    }


  
}

return `${high} ${low}`;
}
console.log(highAndLow([1, 2, 3, 4, 5]));






//Q 5

//Function that adds only even numbers 

function sum (arr) {
    let sum =0;
    for ( let i=0; i<arr.length; i++){
        if (arr[i] %2 ===0) {
            sum += arr[i];
        };
    }

    return sum;
    
}

console.log(sum([4,5,3,6,3,5]));







// Q6


const notifications= [
  { message:"You have a new message", delay:1000 },
  { message:"Your download is ready", delay:3000 },
  { message:"Battery is low", delay:2000 },
  { message:"Friend is online", delay:4000 }
];


// ({message1,message2,message3,message4} = notifications) ;

// setTimeout(()=>console.log(message1),1000);

for (let messages of notifications) {
    setTimeout (()=> console.log(messages.message),messages.delay);
}





// Q7


function fullarr (arr1,arr2) {

    let arr = [...arr1,...arr2];
    arr.unshift(0);
    arr.push(7);
    return arr;

}


console.log(fullarr([1,2,3],[4,5,6]));



// Q 8 

// You have to create a function which receives 3 number arguments: 2 operands a and b, and the result of an unknown operation performed on them.
// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.
// The possible return strings are: "addition", "subtraction", "multiplication", "division".
// Examples:
// (a = 1, b = 2, result = 3)   --> 1 ? 2 = 3   --> "addition"
// (a = 5, b = 2, result = 2.5) --> 5 ? 2 = 2.5 --> "division"
// Notes
// The / operator performs a plain division without rounding.
// You can assume that there will always be a unique valid answer (no ambiguous cases like e.g. 1 ? 0 = 0 which could be either - or +, or 3 ? 1 = 3 which could be either * or /).
// You can assume that there will be no division by 0



function calcType(a, b, res) {
  if (res === a + b){
    return "addition"
    
  }
  else if (res === a - b){
    return "subtraction"
  }
  else if (res === a / b){
    return "division"
  }
  
  else if (res === a * b){
    return "multiplication"
  }
  else if (b === 0 ){
    return `you can't divide by ${b}`
  }
  
}

console.log(calcType(3,0,-2));



// Q 9 

// Suzuki needs help lining up his students!

// Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

// You will be given a string of student names. Sort them and return a list of names in descending order.

function lineupStudents(students){
  
  return students.split(" ").sort((a,b) => {
      if (b.length !== a.length){
        return b.length - a.length;
      }
      return b.localeCompare(a)
    })
   
   
  }

console.log(lineupStudents ( 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'))



// Q 10 

// The marketing team is spending way too much time typing in hashtags. Let's help them with our own Hashtag Generator! Here's the deal: It must start with a hashtag (#). All words must have their first letter capitalized, and remaining letters lowercased. If the final result is longer than 140 chars it must return false. If the input or the result is an empty string it must return false. do it in one line


function generateHashtag (str) {
  // 1. Clean the input and handle empty strings right away
  const trimmed = str.trim();
  if (trimmed === "") return false;

  // 2. Map the capitalized words and join them with NO spaces ("")
  let words = trimmed.split(/\s+/).map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join("");
   
  // 3. Assemble the final hashtag
  let result = `#${words}`;

  // 4. Validate final length constraint
  
  return result.length > 140 ? false : result;
}

console.log(generateHashtag("Hello there thanks for trying my Kata")); 
// Output: #HelloThereThanksForTryingMyKata


// Q 11 

//Your task is simply to count the total number of lowercase letters in a string

function counti (str){
    let result = str.match (/[a-z]/g);
    if (result){
        return result.length 
    }
    return 0;
    
}

console.log(counti("wwde"));














