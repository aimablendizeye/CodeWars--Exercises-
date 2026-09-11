
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


function antiOptimice (task){
return new Promise (resolve => {
    let result = task()

    setTimeout (() => {
      
      resolve(result)
    },11000)
  })
}

antiOptimice(task);