
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