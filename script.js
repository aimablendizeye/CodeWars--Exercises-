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



// Q2   
 
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

// console.log(isMirrorImage("listen", "silent"))
console.log(isMirrorImage("Test", "tseT "));

















