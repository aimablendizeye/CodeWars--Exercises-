

// Q 1

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.



function multiTable (num) {

  let result =""
  for (let i=1; i<=10; i++) {
   result += `${i} * ${num} = ${i * num}\n`
    
  }

  return  result;
  
}

console.log(multiTable(5));


// Q 2 
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeat (n,s) {
  let arr =[]
  for (let i=0;i<n; i++) {
    arr.push(s)
  }
  return arr.join('')
  
}

console.log(repeat(4,"a"))


// Q3 

// Calculate the average of an array 

function findAverage(array) {
  
  if (array.length == 0) return 0;
  
  let sum = 0;
  for (let i =0; i <array.length; i++) {
    sum +=  array[i];
  }
  return Math.ceil(sum / array.length);
}
console.log(findAverage([3,4,6,7,8,9]))



// Q 4

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
  if (n == null)return 0;
  let arr = []
  for (let i=0; i<=n; i++) {
     arr.push(2**i);
  }
  return arr
}

console.log(powersOfTwo(3))