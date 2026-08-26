// CodeWars Questions 


 // Q 1. Find the odd numbers  and their sum , also do it on the  Even numbers then do the difference between them . the condition is to use rest operator as parameter .



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
    const unique = arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
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



// Q12 

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]


function twoArray (arr1,arr2){
  let result = []
  for (let str1 of arr1){
    for (let str2 of arr2){
        if (str2.includes(str1)){
            result.push(str1);
            break;
        }
    }
  }
  return result.sort();
}

console.log(twoArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]));


// Q 13

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If a number is a multiple of both 3 and 5, only count it once.


function solution(number){
   if (number < 0) return 0;
  
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
  
}
console.log(solution (5));


// Q 14 Checking number of students who passed the course

function checkPassed (arr) {
    let passed = arr.filter (n => n >= 50 )
    return passed.length
}

console.log( checkPassed ([39,80,40,78,34]))


// Q14 

// You are given a string s. It's a string consist of letters, numbers or symbols.

// Your task is to find the Longest substring consisting of unique characters in s, and return the length of it.

// Note
// 1 <= s.length <= 10^7

// 5 fixed testcases

// 100 random testcases, testing for correctness of solution

// 100 random testcases, testing for performance of code

// All inputs are valid.

// Pay attention to code performance.

// If my reference solution gives the wrong result in the random tests, please let me know(post an issue).

// Example
// For s="baacab", the output should be 3.

// The non repeating substrings in s are:

// "b","c","a","ba","ac","ca","ab","cab"
// The longest one is "cab", its length is 3.

// For s="abcd", the output should be 4.

// The longest one is "abcd", its length is 4.

// For s="!@#$%^&^%$#@!", the output should be 7.

// The longest substring are "!@#$%^&" and "&^%$#@!", their length both are 7.



 
function longestSubstringOf(string) {
  
	const n = string.length;
    const lastSeen = new Int32Array(65536).fill(-1); // covers BMP chars

    let start = 0;
    let maxLen = 0;

    for (let i = 0; i < n; i++) {
        const code = string.charCodeAt(i);
        const prev = lastSeen[code];

        if (prev >= start) {
            start = prev + 1;
        }
        lastSeen[code] = i;

        const len = i - start + 1;
        if (len > maxLen) {
            maxLen = len;
        }
    }

    return maxLen;
  //coding and coding..
}
console.log(longestSubstringOf("baacab"));           
console.log(longestSubstringOf("abcd"));             
console.log(longestSubstringOf("!@#$%^&^%$#@!"));



// Q 15



// Here is the Condition 
// Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware of the rules.

// So, the goal of this kata is to wite a function that encodes a single word string to pig latin.

// The rules themselves are rather easy:

// The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

// The word starts with a consonant -> move consonants from the beginning of the word to the end of the word until the first vowel, then return it plus "ay".

// The result must be lowercase, regardless of the case of the input. If the input string has any non-alpha characters, the function must return None, null, Nothing (depending on the language).

// The function must also handle simple random strings and not just English words.

// The input string has no vowels -> return the original string plus "ay".

// For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants, so they are moved to the end of the string and "ay" is appended.


function pigLatin(word) {
  // Return null if the word contains non-letters

  if (!/^[a-zA-Z]+$/.test(word)) {
    return null;
  }

  word = word.toLowerCase();

  const vowels = "aeiou";

  // Starts with a vowel

  if (vowels.includes(word[0])) {
    return word + "way";
  }

  // Find first vowel

  let firstVowel = -1;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      firstVowel = i;
      break;
    }
  }

  // No vowels

  if (firstVowel === -1) {
    return word + "ay";
  }

  // Move leading consonants to the end

  return word.slice(firstVowel) + word.slice(0, firstVowel) + "ay";
}

console.log(pigLatin("apple"));      // "appleway"
console.log(pigLatin("Spaghetti"));  // "aghettispay"
console.log(pigLatin("chair"));      // "airchay"
console.log(pigLatin("rhythm"));     // "rhythmay"
console.log(pigLatin("123abc"));     // null
console.log(pigLatin("Smile"));      // "ilesmay"




// Q 16

// Check if the word is parindrome 



function parindrome (str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {

  if (str[left] !== str[right]) {
    return false;
  }
  left ++;
  right --;

  }

  return true;

 
}

console.log(parindrome("wolrd"));
console.log(parindrome("racecar"));



// Kata 8kyu 

// Q 17.



function greet(name){
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Aimable"))


// Q 18 


function makeNegative(num) {
  if (num <= 0) {
    return num;
  }
  return -num;
}

console.log(makeNegative(0));  
console.log(makeNegative(5)); 
console.log(makeNegative(-5));






//Q 19 

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0


function sumArray(arr) {
    if (! arr || arr.length <= 1) return 0;

    arr.sort((a, b) => a - b);

    return arr.slice(1, -1).reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([3,4,5,6,7,93]));




// Q 20 
// Compare Two values 

function add(a, b){
	// code here
  if ( a == b) {
    return true;
  }
  return false;
}

console.log(add(2,"6"));



// Q 21 
// Display the a day of the week 

function whatday(num) {
  switch (num) {
    case 1:
      return "Sunday";

    case 2:
      return "Monday";

    case 3:
      return "Tuesday";

    case 4:
      return "Wednesday";

    case 5:
      return "Thursday";

    case 6:
      return "Friday";

    case 7:
      return "Saturday";

    default:
      return "Wrong, please enter a number between 1 and 7";
  }
}


// Q 22

// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur

function reverseMessage(str) {
  return str
    .toLowerCase()                 
    .split(" ")                     
    .reverse()                      
   .map(word => {
    let reversed = word.split("").reverse().join("");

    if (reversed === "") return "";

    if (/[a-z]/.test(reversed[0])) {
        return reversed[0].toUpperCase() + reversed.slice(1);
    }

    return reversed;
})
    .join(" ");
}

console.log(reverseMessage('This is an example of a Reversed Message!'));


// Q 23 
// Function that returns the Century According to the year 

function returnCentury (year) {
    return Math.ceil (year / 100)
}

console.log(returnCentury (3));



// Q 24 

// Write a function that returns twice the input value, unless the value is a "tricky double."

// A number is considered a tricky double if it consists of two identical halves with no extra digits. For example, 44, 1212, and 7777 are tricky doubles because each half of the number is the same (4 and 4, 12 and 12, 77 and 77).

// If the input value is a tricky double, return it as-is. Otherwise, return the value multiplied by 2.

// Examples of tricky double numbers:

// 44 - consists of two 4s
// 77 - consists of two 7s
// 3333 - consists of two 33s
// 8787 - consists of two 87s
// 100100 - consists of two 100s
// In the example 8787, the number 87 is doubled (appears twice).

// trickyDoubles(15)   // should return 30
// trickyDoubles(100)  // should return 200
// trickyDoubles(4343) // should return 4343

function trickyDoubles(n) {
    const str = n.toString();

    if (str.length % 2 !== 0) {
        return n * 2;
    }

    let left = 0;
    let right = str.length / 2;

    while (right < str.length) {
        if (str[left] !== str[right]) {
            return n * 2;
        }
        left++;
        right++;
    }

    return n;
}


// Q 25 

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers) {
  const counts = {};

  for (const num of numbers) {
    counts[num] = (counts[num] || 0) + 1;
  }

  return numbers.find(num => counts[num] === 1);
}

console.log(stray([1, 1, 2]));                    // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3
console.log(stray([33, 33, 5, 33, 33]));         // 5


// Q 26 

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount (str){
  let count = 0;

  for (let chr of str) {
    if ("aeiou".includes(chr)){
      count ++;
    }
  }
  return count;
}

console.log(getCount("aimable"));




// Q 27 

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel



function removeVowel (str){
   return str.replace (/[auioe]/gi, "");
}

console.log(removeVowel("aimAble"));


// Q 28;

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  return x
    .split('')
    .map(digit => digit < 5 ? '0' : '1')
    .join('');
}



// Q 29

// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis


  function initializeNames(name){
   var n = name.split(" ");
    if(n.length < 3) return name;
     for(i = 1; i < n.length-1; i++){
       n[i] = n[i][0] + ".";
}
      return n.join(" ");
}


// Q 30

// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck


function solve(s) {
  return Math.max(...s.match(/\d+/g).map(Number));
};


// Q 31 


// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

function nerdify(txt) {
  return txt
    .replace(/[aA]/g, "4")
    .replace(/[eE]/g, "3")
    .replace(/l/g, "1");
}

// Q 32 

// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values

function suming(a) {
    let count = 0;
    let str = Math.abs(a).toString();
    let digits = str.split("");

    for (let x of digits) {
        count += Number(x);
    }

    return count;
}


// Q 33

// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

// You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either a.m. or p.m.) as input.

// Your task is to return a four-digit string that encodes that time in 24-hour time.

// Notes
// By convention, noon is 12:00 pm, and midnight is 12:00 am.
// On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015


function to24hourtime(hour, minute, period) {
    if (period === "am") {
        if (hour === 12) {
            hour = 0;
        }
    } else { // pm
        if (hour !== 12) {
            hour += 12;
        }
    }

    return String(hour).padStart(2, "0") +
           String(minute).padStart(2, "0");
}

// Q 34 

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
  
  if ( l!==w) {
    let sum = l + w;
    return sum *2;
  }
  return l * w;
};


//  Q35

// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order


function inAscOrder(arr) {
    for (let i = 0; i < arr.length-1; i++ ) {
      if (arr[i] >= arr[i +1]) {
        return false;
      }
    }
  return true;
}


//Q 36

// Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

// The next number that experiments this particular behaviour is 370 with the same power.

// Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

// eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

// Let's see some cases:

// eqSumPowdig(100, 2) ----> []

// eqSumPowdig(1000, 2) ----> []

// eqSumPowdig(200, 3) ----> [153]

// eqSumPowdig(370, 3) ----> [153, 370]

function eqSumPowdig(hMax, exp) {
    let result = [];

    for (let i = 2; i <= hMax; i++) {
        let digits = String(i).split("");

        let sum = digits
            .map(n => Number(n) ** exp)
            .reduce((x, y) => x + y, 0);

        if (sum === i) {
            result.push(i);
        }
    }

    return result;
}


// Q 37 


// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!


function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((a,b) => a+b,0);
  let avg = sum /classPoints.length
  if (yourPoints > avg) {
    return true;
  }
  return false;
}

// Q 38 

// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result




function  calculateAge(birth, customYear) {  
   if (birth > customYear) {
        let year = birth - customYear ;
       if (year === 1){
        return  `You will be born in ${year} year.`;
        }
         else {
        return `You will be born in ${year} years`;
       }

    
   }
  else if (birth < customYear) {

    let oldYear = customYear - birth;

      if (oldYear === 1){
        return `You are ${oldYear} year old`
        }
         else {
        return `You are ${oldYear} years old`
       }
    
  }
  else {
    return "You were born this very year!"
  }
}

console.log(calculateAge(2001, 2002));

// Q 39

// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"


function stringMerge(string1, string2, letter){
  let index1 = string1.indexOf(letter);
  let index2 =string2.indexOf (letter);
  
    let first = string1.slice(0,index1);
    let second = string2.slice (index2 );

    return `${first}${second}`;
}

// Q 40 

// Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

// For example:

// add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like 
// this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]

function add(arr) {
  return arr.reduce((acc, curr) => {
    const sum = (acc.length ? acc[acc.length - 1] : 0) + curr;
    acc.push(sum);
    return acc;
  }, []);
}



// Q 41 

// The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

// hammingWeight(10) // 1010  => 2
// hammingWeight(21) // 10101 => 3
// The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)


function hammingWeight(x) {
  let count = 0;

  while (x > 0) {
    count += x & 1; // Add 1 if the last bit is 1
    x >>= 1;        // Shift bits one place to the right
  }

  return count;
}


// Q 41 

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


function remove (string) {
  //coding and coding....
  if (string.endsWith ("!")) {
       return string.slice(0,string.length-1);
  }
 
  
  return string;
}


// Q 42 

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Write a function that receives age, and returns what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(old) {
  
  if (old <14){
    return "drink toddy"
  }
  else if (old >= 14 && old < 18){
    return "drink coke"
  }
  else if (old >= 18 && old < 21){
    return "drink beer";
  }
  else {
     return "drink whisky";
  }
  
};


// Q 43 


// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples (input -> output)
// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false

function isOpposite(s1, s2){
  //coding here...
  s1 = s1.split('');
  s2 = s2.split('');
  if(s1.length == 0 && s2.length ==0) return false
  if(s1.length != s2.length) return false
  
  let receiver = [];
  for(let i=0; i<s1.length; i++){
    
    if(s1[i] == s1[i].toLowerCase()){
      
      receiver.push(s1[i].toUpperCase() == s2[i]);
    }
    else if(s1[i] == s1[i].toUpperCase()){
       receiver.push(s1[i].toLowerCase() == s2[i]); 
    }
  }
  return receiver.every(item => item == true);
}


// Q 43 

// You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

// You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

// "C.....m" returns "Escaped!" <-- more than three characters between

// "C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump



function catMouse(x) {
  return x.length <= 5 ? "Caught!" : "Escaped!";
}


// Q 44

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
  // your code here
  let clearStr = x.replace (/[^a-zA-Z0-9]/).toLowerCase();
  
  let left = 0;
  let right = clearStr.length-1;
  while (left < right){
    if (clearStr[left] !== clearStr[right]) return false;
    
     left ++;
     right --;
  }
  return true;
 
}


// Q 44 

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

function multiply(number){
  //your code here
   let str = number.toString().replace(/\D/g,'');
    let leng = str.length;
   let power = 5 ** leng;
   return number * power;
}

// Q 45 

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


function countSheeps(sheep) {
   let present = sheep.filter (n => n === true);
    return present.length 
}


// Q 46 

// You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

// If the input is 'H', return 'Hello World!'
// If the input is 'Q', return the input
// If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:

function HQ9(code) {
  if (code === 'H') {
    return 'Hello World!';
  } else if (code === 'Q') {
    return code;
  } else if (code === '9') {
    let lyrics = '';
    
    for (let i = 99; i >= 3; i--) {
      lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer.\n`;
      lyrics += `Take one down and pass it around, ${i - 1} bottles of beer on the wall.\n`;
    }
    
    // Handle the singular "bottle" and "no more" transitions
    lyrics += `2 bottles of beer on the wall, 2 bottles of beer.\n`;
    lyrics += `Take one down and pass it around, 1 bottle of beer on the wall.\n`;
    
    lyrics += `1 bottle of beer on the wall, 1 bottle of beer.\n`;
    lyrics += `Take one down and pass it around, no more bottles of beer on the wall.\n`;
    
    lyrics += `No more bottles of beer on the wall, no more bottles of beer.\n`;
    lyrics += `Go to the store and buy some more, 99 bottles of beer on the wall.`;
    
    return lyrics;
  }
  
  // For '+', or any other character not matched above, return undefined
  return undefined;
}

// Q46 

// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise

function xor(a,b){
    if (a === b) return false;
    return true;
}
console.log(xor(false,false));

//Q 47 

// Write a single function that can be invoked by either

// sum(2,3); // 5
// // or
// sum(2)(3); // 5
// Both of these examples should return the sum of the 2 numbers

function sum (a,b) {
  
  if (b === undefined){
    
    return function ( nexNum){
      return a + nexNum;
    }
  }
  return a + b;
  
}
console.log(sum (2,3));

// Q48 


// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
  return  data.map(([age,handicap]) => age>=55 && handicap > 7? "Senior":"Open")
}


// Q49 

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest (s1,s2){
    let result = s1 + s2;
    let final = [...new Set(result)].sort().join('');
    return final;
    
}
console.log(longest("aimable" , "adizeye"));


// Q 50 

// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

function getChar (C){
  return String.fromCharCode(c)
}

console.log(getChar(68));

// Q 51 

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.


var replaceDots = function(str) {
  return str.replaceAll('.', '-');
}

// 52 

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp (oper, val1 , val2){
      if (oper === "+"){
       return val1 + val2;
      }

      else if (oper === "-"){
       return val1 - val2;
      }

     else if (oper === "*"){
       return val1 * val2;
      }
      else if (oper === "/"){
        return val1 / val2;
      }
      else {
        return 0
      }

}
console.log(basicOp("+" ,3,4));


// Q 53 

// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase();
}


// Q 54 

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.




function wordsToMarks(string){
  let sum = 0;
  for (const char of string){
    sum += char.charCodeAt(0) - 96;
  }
  
  return sum;
  
  
}

// Q 55

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

// Example
// unscrambleEggs("Beggegeggineggneggeregg")  =>  "Beginner"
// //             "B---eg---in---n---er---"


function unscrambleEggs(word) {
  return word.replaceAll("egg","");
}



// Q 56

// In this kata you will be given an array of the dimensions of rectangles (array with width and length) and circles (radius - just a number). Your task is to sort the objects by their area in ascending order and return the sorted array of areas.

// Examples
//    [ [4.23, 6.43], 1.23,   3.444,  [1.342, 3.212] ] 
// // [ rectangle,   circle,  circle,   rectangle    ]
// --->
// [ 4.31, 4.75, 27.2, 37.26 ]


function sortByArea(array) {
  return array
    .map(shape => {
      if (Array.isArray(shape)) {
        return +(shape[0] * shape[1]).toFixed(2);
      }

      return +(Math.PI * shape ** 2).toFixed(2);
    })
    .sort((a, b) => a - b);
  }

  

  // Q 57 

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.


  function spEng(sentence){
  
  return sentence.toLowerCase().includes("english".toLowerCase());
}

// Q 58

// Sensor Trend Reversals

// A sensor records a sequence of integer readings.

// Your task is to count how many times the trend changes between:

// increasing
// decreasing
// A trend reversal occurs when an increasing sequence becomes decreasing, or when a decreasing sequence becomes increasing.

// Consecutive equal readings do not create a direction and must be ignored.

function countDirectionChanges(readings) {
  let changes = 0;
  let previousDirection = 0; // 0 = no direction yet

  for (let i = 1; i < readings.length; i++) {
    if (readings[i] === readings[i - 1]) continue;

    const currentDirection = readings[i] > readings[i - 1] ? 1 : -1;

    if (previousDirection !== 0 && currentDirection !== previousDirection) {
      changes++;
    }

    previousDirection = currentDirection;
  }

  return changes;
}


// Q 59 

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.




const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
   if (distanceToPump <= mpg * fuelLeft) return true;
    return false
};



// Q 60

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
   let word = s.split(" ").map (n =>n.length).sort((a,b) => a-b);
   return word[0];
}

console.log(findShort("Let's travel abroad shall we"));

// Q 61 

// Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

// ["ab", "aaa"]    =>  true
// ["trances", "nectar"]    =>  true
// ["compadres", "DRAPES"]  =>  true
// ["parses", "parsecs"]    =>  false
// Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.


function letterCheck (arr){
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
    
    return [...new Set(str2)].every (char => str1.includes(char));

 
}

console.log(letterCheck(["trances", "nectar"]));


// Q 62

// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW
// Note: There will be at least two words in the given string!


function toAcronym(inp){
    let acron = inp.split(' ');
    let result = ""
     for (const char of acron){
        result +=char[0];
        
     }
     return result.toUpperCase();

}

console.log(toAcronym("aimable ndizeye mugabo"));


// Q 63

// Given a string and a mask (a list of lengths), split the string into its parts accordingly.

// Examples:
// |     String      |  Mask (lengths)  |          Output           |
// |-----------------|------------------|---------------------------|
// |  "1234567890"   |  (3, 3, 4)       |  ["123", "456", "7890"]   |
// |  "codewars"     |  (4, 4)          |  ["code", "wars"]         |
// Notes:
// The mask only contains strictly positive integers.
// A mask is valid if and only if the sum of the lengths is equal to the length of the string.
// Otherwise, return None, Nothing or a similar empty value.


function splitByMask(str, mask) {
  if (mask.reduce((sum, len) => sum + len, 0) !== str.length) {
    return null;
  }

  let result = [];
  let index = 0;

  for (const length of mask) {
    result.push(str.slice(index, index + length));
    index += length;
  }

  return result;
}

// Q 64 

// For an integer k rearrange all the elements of the given array in such way, that:

// all elements that are less than k are placed before elements that are not less than k;
// all elements that are less than k remain in the same order with respect to each other;
// all elements that are not less than k remain in the same order with respect to each other.

// For k = 6 and elements = [6, 4, 10, 10, 6], the output should be splitByValue(k, elements) = [4, 6, 10, 10, 6].

// For k = 5 and elements = [1, 3, 5, 7, 6, 4, 2], the output should be splitByValue(k, elements) = [1, 3, 4, 2, 5, 7, 6].


function splitByValue(k, elements) {
  let less = elements.filter (x => x < k);
  let greaterOrEqual = elements.filter( x => x >=k);
  
  return less.concat(greaterOrEqual);
}


// Q 65

// Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.

// Examples
// last(5)                 =>  5
// last([1, 2, 3, 4])      =>  4
// last("xyz")             => "z"
// last(1, 2, 3, 4)        =>  4
// last([1, 2], [3, 4])    =>  [3, 4]
// last([[1, 2], [3, 4]])  =>  [3, 4]



function last(...args) {
  // 1. If multiple arguments are passed, return the last argument
  if (args.length > 1) {
    return args.at(-1);
  }

  // 2. If exactly one argument is passed, extract it
  const firstArg = args[0];

  // 3. Check if that single argument is an Array or a String
  if (Array.isArray(firstArg) || typeof firstArg === 'string') {
    return firstArg.at(-1);
  }

  // 4. Otherwise, it's a single primitive (like a number), so return it directly
  return firstArg;
}


// Q 66 

// Task
// You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

// Examples
// reverseByCenter("secret")  == "retsec" // no center character
// reverseByCenter("agent")   == "nteag"  // center character is "e"


function reverseByCenter (s){
    
    if (s.length % 2 ===0) {
        let half = s.length/2;
        let first = s.slice(0,half);
        let second = s.slice(half,s.length);
        return second + first; 
    }
    else {
        let hal = Math.floor(s.length/2) ;
        let one = s.slice(0,hal);
        let middle = s.slice(hal,hal+1);
        let two = s.slice(hal+1,s.length)
        return two + middle + one;
    }
  
}

console.log(reverseByCenter("agent"));


// Q 67 

// Write a function that sums squares of numbers in list that may contain more lists
// Example:

// var l = [1,2,3]
// SumSquares(l) == 14

// var l = [[1,2],3]
// SumSquares(l) == 14

// var l = [[[[[[[[[1]]]]]]]]]
// SumSquares(l) == 1

// var l = [10,[[10],10],[10]]
// SumSquares(l) == 400
// Note: your solution must NOT modify the original list


function  SumSquares (l){

    let arr = l.flat(Infinity);
    let squares = arr.map(n =>  n**2);
    return squares.reduce((a,b) => a + b,0);
    
}

console.log( SumSquares([10,[[10],10],[10]]));

// Q 67 

// In this kata you are provided to evaluate a string, you must check for any HTML code (i.e. if any HTML tags are found), if any code is found you must return false, If the input is not a string you must throw a TypeError, if the string is over 255 characters long or contains 0 characters you must throw a RangeError and last of all if the string entered is null throw a ReferenceError.

// Error Messages
// ReferenceError

// new ReferenceError('Message is null!')
// TypeError

// new TypeError(`Message should be of type string but was of type ${typeof msg}!`)
// RangeError

// new RangeError(`Message contains ${msg.length} characters!`)





function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }

  if (typeof msg !== "string") {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );
  }

  if (msg.length === 0 || msg.length > 255) {
    throw new RangeError(
      `Message contains ${msg.length} characters!`
    );
  }

  return !/<[^>]*>/g.test(msg);
  
}


// Q 68 

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function dna(str) {
    return str.replace(/[ATGC]/gi, letter => {
        if (letter.toUpperCase() === "A") return "T";
        if (letter.toUpperCase() === "T") return "A";
        if (letter.toUpperCase() === "G") return "C";
        if (letter.toUpperCase() === "C") return "G";
    });
}

console.log(dna("ATTGC"));

// Q 69

// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

// The resulting array is sorted in ascending order.

// Any duplicate values are removed, so each integer appears only once.

// If both input arrays are empty, return an empty array.

// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


function mergeArrays(arr1, arr2) {
   let newArr1 = [...new Set(arr1)];
     let newArr2 = [...new Set(arr2)];
  

     let allArr = [...newArr1,...newArr2];
  return [...new Set(allArr)].sort((a,b) => a-b);
}

// Q 70

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.


function squareOrSquareRoot(array) {
    const arr = array.map (n => {
        if (Math.floor(Math.sqrt(n)) === Math.ceil(Math.sqrt(n)) ){
            return Math.sqrt(n);
        }
        else {
            return n ** 2;
        }
           
    })
     return arr;  
}


// Q 71 

// Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

// Example
// With the numbers 1, 2, and 3, here are some possible expressions:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The maximum value that can be obtained is 9.

// Notes
// The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.
// You can use the same operation more than once.
// It is not necessary to use all the operators or parentheses.
// You cannot swap the operands. For example, with the given numbers, you cannot get the expression (1 + 3) * 2 = 8.
// Input and Output Examples
// expressionsMatter(1, 2, 3) ==> 9, because (1 + 2) * 3 = 9.
// expressionsMatter(1, 1, 1) ==> 3, because 1 + 1 + 1 = 3.
// expressionsMatter(9, 1, 1) ==> 18, because 9 * (1 + 1) = 18.


function expressionMatter (a,b,c) {
    
 let one = a * (b + c)
 let two = a * b * c;
 let three =  a + b * c;
 let four = (a + b) * c;
 let five = a + b + c;

 let arr = [one,two,three,four,five];

 return Math.max(...arr);

}

console.log(expressionMatter(1,1,1));

// Q 72 

// Create a function that accepts a 2D array of names. The function will return a single array containing staff names in the order that they should empty the bin.

  function binRota (arr) {

    let newArr = arr.map ((val,index) =>  {
        if (index %2 !==0) {
            return val.reverse()
        }
        return val;
    
  });
  return newArr.flat();
  }
  console.log( binRota([[1,2,3],[3,45,6],[4,52,8],[6,7,9],[4,6,7],[21,76,8]]));


  // Q 73 

//   Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0

function strCount (str,letter) {
    let arr = str.split('');
    let count = 0;

    for (let i =0; i<arr.length; i++){
        if (arr[i] === letter){
            count ++;
        }
        
    }
    return count;
}

console.log(strCount("","a"));


// Q 74

// Write function which will create a string from a list of strings, separated by space.

// Example:

// ["hello", "world"] -> "hello world"


function sentenceToString (arr) {   
 return  arr.join(' ');
      
}
console.log(sentenceToString(["Aimable","Ndizeye","Mugabo"]));


// Q 75

// Write function splitSentence which will create a list of strings from a string.

// Example:

// "hello world" -> ["hello", "world"]


function wordTosentence (n) {
  return n.split(' ')
}

// Q 76 

// While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

// So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

// If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

// If string contains 4 numbers but not consecutive it returns "not consecutive".


function checking(numbers) {
  // Check that input is a string
  if (typeof numbers !== "string") {
    return "Incorrect input";
  }

  const newArr = numbers.split(",");

  // Check that there are exactly 4 values
  if (newArr.length !== 4) {
    return "Incorrect input";
  }

  // Convert strings to numbers
  const arr = newArr.map(n => Number(n));

  // Check that all values are valid numbers
  if (arr.some(n => Number.isNaN(n))) {
    return "Incorrect input";
  }

  // Check that numbers are consecutive
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return "Not consecutive";
    }
  }

  // Calculate the product
  const perfectSquare = arr.reduce((product, n) => product * n, 1) + 1;

  return {
    number: perfectSquare,
    squareRoot: Math.sqrt(perfectSquare)
  };
}

console.log(checking("4,5,6,7"));




// Q 77

// You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.
// Return the obtained integer M.

// Note
// the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.

// Example
// For a = [24, 85, 0], the output should be 21784

// An array [24, 85, 0] looks like [00011000, 01010101, 00000000] in binary.

// After packing these into one number we get 00000000 01010101 00011000 (spaces are placed for convenience), which equals to 21784.

// Input/Output
// [input] integer array a
// Constraints: 1 ≤ a.length ≤ 4 and 0 ≤ a[i] < 256

// [output] an integer

function arrayPacking (arr) {
  if (arr.length <1 || arr.length>4 || arr.some(n => n >=256 || n<0)) {
    return arr;
  }
  let newArr = arr.map(n =>n.toString(2).padStart(8,'0'));
    newArr.reverse();
     
  let finalArr = newArr.join('');
  
   return parseInt (finalArr,2);

}



// Q 78 

// Find the volume of a cone whose radius and height are provided as parameters to the function volume. Use the value of PI provided by your language (for example: Math.PI in JS, math.pi in Python or Math::PI in Ruby) and round down the volume to an Interger.

// If you complete this kata and there are no issues, please remember to give it a ready vote and a difficulty rating. :)

function volume(r,h) {
 return Math.floor(Math.PI * r**2 * h/3);
}


// Q 76 

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros (arr){
   let zeroes = arr.filter (n => n === 0);
   let nonZeroes = arr.filter(n => n !==0)
    nonZeroes.push(...zeroes);
   return nonZeroes;
}


// Q 80 

// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.

// Example:

// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]




 function findAll (nums,n) {
  let  arr = [];
  // if (n !== "number") return [];
  if (!Number.isInteger(n)) return [];
  

  for (let i=0; i<nums.length; i++){

    if (nums[i] === n) {
        arr.push(i);
        
    }
  }
   return arr;
 }

 console.log (findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16));


 // Q 81

//  An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(n,m) {
//     let word = "Deletion";
   

if (n.length === m.length ) return  0 ;

 let firstSum = n.reduce ((a,b)=> a+b,0);
 let secondSum = m.reduce((a,b) => a+b,0);
  return firstSum - secondSum;
  
}


// Q 82 

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]


 function vowelIndices (n){
  let arr =[];
 let newArr  = n.split('');
 
 for (let i=0; i< newArr.length; i++){

    if (n === "" || !/[aeiouy]/i.test(n)) return [];
     
     if ( newArr[i].toLowerCase() ==="i"|| 
          newArr[i].toLowerCase() ==="o"|| 
          newArr[i].toLowerCase() ==="u"|| 
          newArr[i].toLowerCase() ==="e"|| 
          newArr[i].toLowerCase() ==="a"|| 
          newArr[i].toLowerCase() ==="y")
         
       {
        arr.push(i +1);
      } 
 }
 return arr;
}
console.log(vowelIndices(""));

// Q 83 

// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]
 

function toLower (arr) {
    return arr.map (n => n.slice(0,1).toUpperCase() + n.slice(1).toLowerCase())
}

console.log(toLower(["jo", "nelson", "jurie"]));


// Q 84  object based 

// You get a new job working for Eggman Movers. Your first task is to write a method that will allow the admin staff to enter a person’s name and return what that person's role is in the company.

// You will be given an array of object literals holding the current employees of the company. You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"



// let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"}, ...... ]
// There are no duplicate names in the array and the name passed in will be a single string with a space between the first and last name i.e. Jane Doe or just a name.


function findEmployeesRole(name) {
//   let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"},
//  

for ( let i=0; i<employees.length; i++) {
    if (name ===employees[i].firstName ||
        name ===employees[i].lastName ||
        name === employees[i].firstName + " " + employees[i].lastName)
   {
    return employees[i].role 
    }
 
  }
    return "Does not work here!"

}


// Q 85 

// As you may know, once some people pass their teens, they jokingly only celebrate their 20th or 21st birthday, forever. With some maths skills, that's totally possible - you only need to select the correct number base!

// For example, if they turn 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

// Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.

// Note: input will be always > 21

// Examples:
// 32  -->  "32? That's just 20, in base 16!"
// 39  -->  "39? That's just 21, in base 19!"


function womensAge(n) {
  let half = n/2
  if (n%2=== 0) {
      return `${n}? That's just 20, in base ${half}!`
  }

  return  `${n}? That's just 21, in base ${Math.floor(half)}!`
       
}


// Q 86


function sumDigPow (a,b) {

  let arr =[]

  for (let i=a; i<b; i++) {
       arr.push(i)
  }
 
  let newArr = []

  for (let j=0; j<arr.length; j++) {
    
      let char = arr[j].toString() 
   

     let nums =  char.split('').map(Number);

     newArr.push (nums);
    
}

 let last =[];

 for (let k=0; k<newArr.length; k++) {
       
    last.push(newArr[k].map((val,index) => val** (index+1)).reduce((a,b) => a+b,0));
      
 }

 let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === last[i]) {
      result.push(arr[i]);
    }
  }

return result;
}


// Q 87
 
// Write a function that returns twice the input value, unless the value is a "tricky double."

// A number is considered a tricky double if it consists of two identical halves with no extra digits. For example, 44, 1212, and 7777 are tricky doubles because each half of the number is the same (4 and 4, 12 and 12, 77 and 77).

// If the input value is a tricky double, return it as-is. Otherwise, return the value multiplied by 2.

// Examples of tricky double numbers:

// 44 - consists of two 4s
// 77 - consists of two 7s
// 3333 - consists of two 33s
// 8787 - consists of two 87s
// 100100 - consists of two 100s
// In the example 8787, the number 87 is doubled (appears twice).

// trickyDoubles(15)   // should return 30
// trickyDoubles(100)  // should return 200
// trickyDoubles(4343) // should return 4343




function trickyDoubles (n) {
  let nums = n.toString();
  if (nums.length %2 !==0) {
    return Number(nums)*2;

  }

  let half = nums.length/2;

  let left = nums.slice(0,half).split('').map(Number);
  let right = nums.slice(half).split('').map(Number);

    let  newArr;
  
   for (let i=0; i<left.length; i++){
      newArr = [...left,...right]
      let  arr = newArr.join('');
      let digit = Number(arr);

    if (left[i] === right[i]) {

      return digit;   
 }

 else {

  return digit *2;
 
 }
   }
   return digit;    
}
console.log(trickyDoubles(1212));


// Q 88 

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

function order(str) {
  return str
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .sort((a, b) => {
      const weight = n => [...n].reduce((sum, x) => sum + +x, 0);
      return weight(a) - weight(b) || a.localeCompare(b);
    })
    .join(' ');
}



// Q 89 

// You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, then the next greatest, and so on...

// More info
// The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.


function mirror (arr) {
 

  if (arr.length === 0) return []

  let large = Math.max(...arr)

  let largearr = arr.filter(n => n === large)
  largearr.shift(arr[0]);

  
   

let nonMiddle = arr.filter(n => n !== large);
 const asc = nonMiddle.map(e => e).sort((a,b)=> a - b)
 const desc = nonMiddle.map(e => e).sort((a,b)=> b - a)

 return [...asc,...largearr,large,...largearr,...desc];
  
}

console.log(mirror([1,2,3,4,6,7]));