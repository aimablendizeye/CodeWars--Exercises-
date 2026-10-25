
//  Q 1

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Words will be separated by exactly one space. There will be no leading or trailing spaces.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"


function spinWords (string) {
  let words = string.split(' ')

  let reversing = words.map(word => {
    if (word.length >=5) {
      return word.split('').reverse().join('');
    }

    else {
      return word;
    }
  })

  return reversing.join(' ');
}

console.log(spinWords("This is another test"))


// Q2 

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"



function tocameCase (string) {
     let words = string.replaceAll("_"," ").replaceAll("-"," ")
      let word = words.split(' ')
   
    let capital =word.filter(n => n !== word[0]).map(n => n.charAt(0).toUpperCase() + n.slice(1))

    return [word[0],...capital].join('');
}

console.log(tocameCase("the-stealth-warrior"));


// Q 3

// Find the first character that repeats in a string and return that character. If there is no such character, return undefined/null/None/Nothing, etc. (depending on your language). Your function should be case-sensitive (a is not equivalent to A).

// firstDup('tweet') => 't'
// firstDup('like') => undefined
// This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.
// Another example:

// In 'translator' you should return 't', not 'a'.
// v      v  
// translator
//   ^   ^
// While second 'a' appears before second 't', the first 't' is before the first 'a'.



function checkingRepeat (input) {
      
 let count ={};
       
 for (let char of input) {
  count[char] = (count[char] || 0)+1
 }

 for (let char of input)  {
  if (count[char] > 1) {
    return char;
  }
  
 }
 return undefined;
    
}

console.log(checkingRepeat("tweet"));


// Q 4 

// So now your task is to write the function antiOptimizeAsync, which takes a single parameter task (a function), and immediately returns a Promise that only resolves to the return value of task() at least 11 seconds (and at most 12 seconds) after antiOptimizeAsync is called.

// task will always be an arbitrary function that might run for any duration between 0 to 10 seconds.


function task () {
  return "Task completed";
}


function antiOptimice (task){
return new Promise (resolve => {
    let result = task()

    setTimeout (() => {
      
      resolve(result)
    },11000)
  })
}

antiOptimice(task);


// Q 5 

// Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

// Notes
// The numbers (a,b) may be positive , negative values or zeros .

// Returning value will be an integer .

// Javascript: the Array reduce methods are disabled, along with eval, require, and module .
// Input >> Output Examples
// 1- Add (5,19) ==> return (24) 

// 2- Add (-27,18) ==> return (-9)

// 3- Add (-14,-16) ==> return (-30)

function counting (x,y) {

  let positiveX =Math.abs(x)
  let positiveY =Math.abs(y)
  let arr = [positiveX ,positiveY ]
  let max = Math.max(...arr)
  let min = Math.min(...arr)

  let arrMax =[]


  // 1

  if (x < 0 && y > 0) {
    for (let i=0; i<max; i++) {
      arrMax.push(i)
    }

    return arrMax.filter(n => n>=positiveY).length * -1;
  }
// 2

   if (x > 0 && y < 0) {
    for (let i=0; i<max; i++) {
      arrMax.push(i)
    }

    return arrMax 
    .filter(n => n>=positiveY).length ;
  }

  // 3

   let arr1 = []
  let arr2 =[]

   if (x < 0 && y < 0) {
     for (let i=0; i<positiveX; i++){
    arr1.push(i);
  }

   for (let i=0; i<positiveY; i++){
    arr2.push(i);
  }

    let allArr = [...arr1,...arr2]

   return allArr.length * -1;

  }
  // 4 

    if (x >= 0 && y >= 0) {
     for (let i=0; i<positiveX; i++){
    arr1.push(i);
  }

   for (let i=0; i<positiveY; i++){
    arr2.push(i);
  }

    let allArr = [...arr1,...arr2]

   return allArr.length ;

  }
}

console.log(counting(1000,1000));




// Q 6 

// Find the most common letter (not a space) in the given string (comprised of at least 3 lowercase words) and replace it with the given letter.

// If such letters are two or more, choose the one that appears earliest in the string.

// For example:

// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'


function replacing (string, letter) {
  
  let lower = string.toLowerCase().replaceAll(" ","").split('');
  let obj = lower.reduce((count, letter) => {
    count[letter] = (count[letter] || 0) + 1
    return count;
  }, {})
     ;
const sorted = Object.entries(obj).sort((a,b) => b[1] - a[1])
const lett =  sorted[0][0]
const result = string.replaceAll(lett,letter);
  return result
  
}

console.log(replacing('great job go ahead', 'k'))


// Q 7 

// Kate likes to count words in text blocks. By words she means continuous sequences of English alphabetic characters (from a to z ). Here are examples:

// Hello there, little user5453 374 ())$. I'd been using my sphere as a stool. Slow-moving target 839342 was hit by OMGd-63 or K4mp. contains "words" ['Hello', 'there', 'little', 'user', 'I', 'd', 'been', 'using', 'my','sphere', 'as', 'a', 'stool', 'Slow', 'moving', 'target', 'was', 'hit', 'by', 'OMGd', 'or', 'K', 'mp']

// Kate doesn't like some of words and doesn't count them. Words to be excluded are "a", "the", "on", "at", "of", "upon", "in" and "as", case-insensitive.

// Today Kate's too lazy and have decided to teach her computer to count "words" for her.

// Example Input 1
// Hello there, little user5453 374 ())$.

// Example Output 1
// 4




function wordCount(str) {
   if(str.length == 0) {
    return 0;
  }
  
  const string = str.toLowerCase()
  .replaceAll("'",' ')
  .replace(/[^a-zA-Z]+/g," ").trim().split(/\s+/);
  return string
    .filter(s => s!==''&&
            s!== "a"&&
            s!=="the"&&
            s!== "on" &&
            s!== "at" &&
            s!=="of" &&
            s!== "upon"&&
            s!== "in"&& 
            s!== "as" ).length;
    }


    // Q 8 

//  You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


function encrypt (str) {
  let elements = str.split(' ')
  let first;
  let arr =[]
  for (let i =0; i<elements.length; i++) {
     if (str === "") {
       return "";
     }
    else if (elements[i].length >2)  {
      let letters = elements[i].slice(1).split(' ')
       .map(word => word.at(-1) + word.slice(1, -1) + word[0] 
        )
     first = elements[i].slice(0,1).charCodeAt() + letters
     arr.push(first)
    }
    
    else if(elements[i].length == 2) {
      letters = elements[i].slice(1).split(' ')
      first = elements[i].slice(0,1).charCodeAt() + letters
      arr.push(first)
    }
    else if(elements[i].length ==1) {
      first = elements[i].slice(0).charCodeAt();
       arr.push(String(first))
    }  
    
  }
  return arr.join(' ');  
}

console.log(encrypt("A jjhh"))


// Q 9 

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd (arr) {
   let obj = arr.reduce ((count,num) => {
     count[num] = (count[num] || 0) + 1
     return count
   },{})
   let prop = Object.entries(obj).filter(([a,b]) => b%2!=0)
   return Number(prop[0][0])
}

console.log(findOdd([6,8,7,8,6]))


// Q 10 

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


function digitalRoot(count) {
  do {
      count = String(count).split('').map(Number).reduce((a,b) => a + b);
} 
   while (count >9 ) ;
   return count
}


// Q 11

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

function persistence (nums) {
  let count = 0;
  do {
    if (String(nums).length <2) {
      return 0;
    }
   nums = String(nums).split('').map(Number).reduce((a,b)=> a * b)
  count ++;
  }
  while (nums > 9) 
    return count;
}
console.log(persistence(39))


// Q 11 

// As the title suggests, this is the hard-core version of another neat kata.

// The task is simple to explain: simply sum all the numbers from the first parameter being the beginning to the second parameter being the upper limit (possibly included), going in steps expressed by the third parameter.

// If the beginning is already equal to the limit, return it, regardless of the step.
// If it is an impossible sequence (with the beginning being larger than the limit and a positive step or the other way around), return 0.
// step will never be 0
// Very large sequences will be tested, so brute-force will not work.

// Examples
// begin end step      expected
//   2    2   2   ===>  2  // 2
//   2    6   2   ===> 12  // 2 + 4 + 6
//   1    5   1   ===> 15  // 1 + 2 + 3 + 4 + 5
//   1    5   3   ===>  5  // 1 + 4
//   1    5  -3   ===>  0  // cannot reach a positive by adding negatives
//  -1   -5  +1   ===>  0  // cannot reach a negative by adding positives
//   2    2  -9   ===>  2  // the step is never used


function sequenceSum(begin, end, step){
  let arr =[]
  
   if (begin >0 && end >0 && step <0) {
    return 0;
  }
  else if(begin <0 && end <0 && step >0) {
    return 0;
  }
  else if (begin == end) {
    return begin;
  }
  else if (begin < end) {
    for (let i=begin; i<=end; i+=step) {
      arr.push(i)
  } 
  }
   else if (begin > end) {
      for (let i=begin; i>=end; i+=step){
        arr.push(i)
      }
    }
  return arr.reduce((a,b) => a + b); 
}

console.log(sequenceSum(-2, 4, 658))



// Q 12 

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.

// Rules
// 1.  The input string will always consist of lowercase letters and spaces, but may be empty, in which case you must return an empty array. 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Examples
// "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// " s p a c e s " => [ " S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]



function waves(str) {
let newArr = [];
  
 for (let i=0; i<str.length; i++) {
   if (str[i] === " ") continue;
  newArr.push (str.slice(0,i) + str[i].toUpperCase()+ str.slice(i+1));  
 }
  return newArr;
  
}
console.log(waves("hello"))


// Q 13 

// Array inversion indicates how far the array is from being sorted.

// Inversions are pairs of elements in array that are out of order.

// Examples
// [1, 2, 3, 4]  =>  0 inversions
// [1, 3, 2, 4]  =>  1 inversion: 2 and 3
// [4, 1, 2, 3]  =>  3 inversions: 4 and 1, 4 and 2, 4 and 3
// [4, 3, 2, 1]  =>  6 inversions: 4 and 3, 4 and 2, 4 and 1, 3 and 2, 3 and 1, 2 and 1

function countInversions( arr ){
  if(arr.length == 0)return 0;
  const a = [...arr];
  let swaps = 0;

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swaps++;
      }
    }
  }
  return swaps
}


// Q 14 

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!


function findMissingLetter(array){
  let startCode = array[0].charCodeAt(0);
  let endCode = array[array.length-1].charCodeAt(0);
  let fullLetter = [];
  
  for (let i=startCode; i<=endCode; i++) {
     fullLetter.push(String.fromCharCode(i))
  }
  
  return fullLetter.find(letter => !array.includes(letter));
  
}
console.log(findMissingLetter(['O','Q','R','S']))