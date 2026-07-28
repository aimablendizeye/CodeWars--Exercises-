

// function decod(str){
//     for (let sr of str){
//     }
//    return sr;
    

// }

// console.log(decod("jjjhehf"));




// function counti (str){
//     let result = str.match (/[a-z]/g);
//     if (result){
//         return result.length 
//     }
//     return 0;
    
// }

// console.log(counti("wwde"));





// function checkPassed (arr) {
//     let passed = arr.filter (n => n >= 50 )
//     return passed.length
// }

// console.log( checkPassed ([39,80,40,78,34]))


// const person = {
//     name: "aimable",
//     age : 24,
//     status : "single"
    
// }

// const propertyi = Object.entries(person)
// console.log(propertyi)

// const arr = [2,5,7,4,6,3]
// const newArr = [...arr , 4]

// console.log(newArr);


// const multipleArr = [
//     ["name", "Aimable"] 
//     ,["age" , 45]
// ]

// const obj = Object.fromEntries(multipleArr)

// console.log(obj);




// Counting characters 



// const letters = ["banana","banana", "orange", "Fruits"];

// const freq = {};

// for (const letter of letters) 
//     // freq[letter] = (freq[letter] || 0) + 1;
// {
//     for (const str of letter) {

//     if (freq[str]){
//         freq[str] = freq[str] + 1
    
//     }
//     else {
//         freq[str] = 1;
//     }

//     }
   
// }
// const sorted = Object.keys(freq).sort().reduce((acc,key) => {
//     acc[key] = freq[key];
//     return acc;
// }, {});

//  console.log(sorted);


 

// Counting Numbers inside array 





// Return an arr of the highest frenquence with its number 

// function numberCount (arr){
//     let freq = {}
//     for (const num of arr ){
//         if (freq[num]){
//             freq[num] = freq [num] + 1 ;
//         }
//         else {
//             freq [num] = 1; 
//         }
//     }



    // Returning  letter with highest Frequence  



    // let maxCount = 0;
    // let maxletter = ""
    // let newObj = {}
    
    // for (let letter in freq){
    //     if (freq[letter] > maxCount) {
    //         maxCount = freq[letter];
    //         maxletter = letter;
    //    newObj.letter = maxletter;
    //    newObj.count =maxCount;

    //     }
    // }

    // return newObj;



 // Returning arr of the most frequence letter that are more than one 



    // let  newArr = [];
    // for (let num in freq) {
    //     if (freq[num] > 1){
    //          newArr.push(num);
    //     }
    // }

    // return newArr;

   
   

    // }
// const more = Object.values(freq) > 1;

// console.log(numberCount("banana"));




// FUnction of pig Latin 


// function toPigLatin (str) {
//    if (/^[aeiou]/i.test(str)){
//     const result = str + "way";
//     return result.toLowerCase()
//    }

// }

// console.log(toPigLatin("orangE"));


// Looking for the Duplicate 


// function duplicate (arr) {
//   return arr.filter((item,index) => arr.indexOf(item) !==index);
// }

// console.log(duplicate([1, 2, 3, 2, 4, 5, 5, 6]));

// function reverseArray (arr) {
//   let left = 0;
//   let right = arr.length - 1
//   while (left < right){
//     arr[left], arr[right] = arr[right] , arr[left]
//   }
//   left++;
//   right --;

//   return arr;
  
// }

// console.log(reverseArray([2,3,4,5,6,7,8,9]));


// function elementArr (arr) {
//   let sum =0;
//   for (let i=0; i<arr.length; i++){
//     sum += arr[i] 
    
    
//   }
//   console.log(sum);

//   } 
   

// elementArr([2,4,6,8,9,3]);


// function makeNegative(num) {
 
//   if (num <= 0) {
//     return num;
//   }
//    return "-"+ num;
// }

// console.log(makeNegative(0));


// function hello(name) {
//   let result = name[0].toUpperCase() + name.slice(1); 
//   if (!name){
//     return "Hello, World!"
//   }
//   return `Hello, ${result}!`;
  
// }
// console.log(hello("aimable"));


// function sum (arr) {
//   if (!arr || arr.length <=1) {
//     return 0;
//   }
//   return  arr.sort((a,b) => a-b).slice(1,-1).reduce((a,b) => a + b);
  
// }

// console.log(sum([3,5,6,7,98,4]));



// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!')
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht

// function reverseString (str) {
//   let message = str.split("").reverse().join("");

//   for (let word of message) {
//    let wrd = word.toUpperCase() + word.slice(1).toLowerCase();

//   }
//   return wrd;
  

// }

// console.log(reverseString("this is morning session"));



// function returnCentury (year) {
//     return Math.ceil (year / 100)
// }

// console.log(returnCentury (1705));


// function trickyDoubles(n){
//   let str = n.toString();
//  let left = 0;
//  let right = str.length -1;

//  while (left < right){
//     if ( str [left] === str[right]) {
//         return n;

//     }
//     left++;
//     right--;

   
//  }
//   return n * 2; 
// }

// console.log(trickyDoubles(4343));



// function uniqueNumber (arr) {
//   for (let i =0; i < arr.length -1 ; i++){
//     if ( arr[0] - arr[1] !== 0){
//        arr[i] ++; 
//     }
//      return arr[1];
   

//   }
       
    
//     }

// console.log(uniqueNumber([33,33,5,33,33]));



// function removeVowel (str){
//    return str.replace (/[auioe]/gi, "");
// }

// console.log(removeVowel("aimAble"));

// function removeMin (arr) {
   
//    for (let num of arr ) {
//       if (num ==  Math.min (arr) ){
//          arr.replace(num, "");
//       }
//        return arr;
//    }
 
// }


// console.log(removeMin ([1,2,3,4,5,6]));
// const str = "125678";

// console.log(str.replaceAll("1","0"));

// function getSub (str) {
//     // let sub = str.slice (0,3);
//     // let newName = sub.replace (sub , "Aimable Ndizeye");
//     // return newName.split(" ")  ;

//     // return str.concat ( " Mugabo", " Aimable");
//     return str.padStart(3, "0");

//     // return sub + " ,Aimable";
// }

// console.log(getSub("Ndizeye"));

    // function solve (str) {
    //     return Math.max(...str.match(/\d+/g).map(Number));
    // }

    // console.log(solve("jghghgh214hjf75"));


    // function replacing (str) {
    //     // return str.replaceAll ('f', 4);
    //    return  str.replaceAll ("f",5).replaceAll("g",6);
            
    // }

    // console.log(replacing("ffhhygghef"));

    // let c = 29;
    // console.log(c.toString ());
   

   
//   function suming (a) {
//     let count = 0;
//     let str = Math.abs(a).toString();
//     let one = str.split("");
//     for (let x of one ){
//         count += Number(x);

//     }
//     return count;
    
//   }


//   console.log(suming(-35)) ;

// function sorting (arr){
//   let a = [...arr].sort((a,b)=> a-b);
//   if ( arr.every((val,index) => val === a[index]) ) {
//     return true;
//   }
//   return false ;

   
// }


// console.log(sorting([1,2,4,3]));



function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((a,b) => a+b,0);
  let avg = sum /classPoints.length
  if (yourPoints > avg) {
    return true;
  }
  return false;
}

console.log (betterThanAverage([4,6,7,47], 8));















