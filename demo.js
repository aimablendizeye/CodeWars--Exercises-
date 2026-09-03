

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



// function betterThanAverage(classPoints, yourPoints) {
//   let sum = classPoints.reduce((a,b) => a+b,0);
//   let avg = sum /classPoints.length
//   if (yourPoints > avg) {
//     return true;
//   }
//   return false;
// }

// console.log (betterThanAverage([4,6,7,47], 8));

 
// let a = "45g";
// let char = a.replace (/[0-9.]/g,'');

// console.log(char);


// function  calculateAge(birth, customYear) {  
//    if (birth > customYear) {
//         let year = birth - customYear ;
//        if (year === 1){
//         return  `You will be born in ${year} year.`;
//         }
//          else {
//         return `You will be born in ${year} years`;
//        }

    
//    }
//   else if (birth < customYear) {

//     let oldYear = customYear - birth;

//       if (oldYear === 1){
//         return `You are ${oldYear} year old`
//         }
//          else {
//         return `You are ${oldYear} years old`
//        }
    
//   }
//   else {
//     return "You were born this very year!"
//   }
// }

// console.log(calculateAge(2001, 2002));


// function merge (str1 ,str2, char) {
//     let indexi = str1.indexOf(char);
//     let first = str1.slice(0,indexi);
//     let second = str2.slice (indexi);

//     return `${first}${second}`;
    
// }

// console.log(merge("aimable","Ndizeye","i"));


// function add (arr) {
//     return arr.reduce ((acc,elem) => {
//         acc.push(elem + acc);
//         return acc;
//     } , []);
// }


// console.log(add([1,2,3,4,5]));


// let a = 68;
// let binary =a.toString(2)
// // let target = "1";

// // let occure = binary.toString().split(target).length-1;
// //  console.log(occure);

// console.log(binary);

// function removing (str) {
//     // let last = replace(str.length-1);
//     // return str.split('').replace(last,'').join();
//     return str.length-1;
// }

// console.log(removing("aimable"));



// function drink (old ){
//     switch   (old){
//         case old <14:
//             return "tody";
//             break;
//         case old >=14 && old <18:
//             return "coke";
//             break;
//         case old >=18 && old <21:
//               return "beer";
//               break;
//          default : 
//           return "Whisky";            
//     }
// }

// console.log(drink(13));


// let a = "ai..";
// let dot = a.split('');
// for (let i = 1; i < dot.length-1; i++){

// }

// let str = "A....e";
// let first = str.indexOf();
// let second = str.indexOf(str.length-1);
// console.log(first);
 




// function check (name){

//   const cleanStr = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
// let  reveser = cleanStr.split('').reverse().join('');

// if (name == reveser) return true;
// return false;
// }
// console.log(check("MAdam"));

// let name = "madam"
// let str = "madam";

// console.log(name === str);

// function mul (num){
//     let str = num.toString().replace(/\D/g,'');
//     let leng = str.length;
//    let power = 5 ** leng;
//    return num * power;

// }

// console.log(malt(-1));

// function counting (arr){
//     let present = arr.filter (n => n === true);
//     return present.length 

// }
// console.log(counting([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]));



// function xor(a,b){
//     if (a === b) return false ;
//     return true ;
// }
// console.log(xor(true,false));


// function largest (arr) {
//     // return arr.reduce ((a,b) => {
//     //     Math.max(a , b);
    
//     // } , - Infinity );
    
//     return Math.max(...arr);
// }
// console.log(largest([1,2,3,4,5]));



// function largest (arr) {
//      return   arr.reduce ((a,b) => {
//       return  a > b? a:b;
    
//      })
// }


// console.log(largest([1,2,3,4,5]));


// function largest (arr) {
//     let maxi = arr[0]
//     for (let i=1; i < arr.length-1; i++){
//         if (arr[i] > maxi  ){
//             maxi = arr[i];
            
//         }
//         return maxi;
//     }
// }

// console.log(largest([1,32,4,5,3,6]));


// 1 st challenge without using reverse method , reverse the word ;

// function reversing (str) {
    
//  let reversed = "";
//  for (let i=str.length-1; i >=0; i--){
//     reversed +=str[i];
//  }

//  return reversed;

// }

// console.log(reversing("Aimable"));


// challenge 2 
// largest number without using reduce or math.max 

// function largest (arr){
//     let largest = 0;
//     for (let i = 0; i < arr.length-1; i++){
//         if (arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// console.log(largest([1,5,3,6,36,,7]));


// function even (num){
//     let result =[];

//     for (let i=0; i < num.length-1; i++){
//         if (num[i] %2 ===0)
//          result.push(num[i]);

       
// }
// return result;
// }


// console.log(even([1,2,5,6,78,3]));

// function openOrSenior (data) {
   
   
//     let result = [];
//    for (let i =0; i< data.length; i++){
//       let first = data[i][0];
//       let second = data[i][1];

//        if (first >= 55 && second > 7) {
//         result.push("senior");   
//     }
//     else {
//         result.push("open");
//     }
//    }
   
//     return result;

// }

// console.log(openOrSenior([[55,8],[33,5]]));


// function longest (s1,s2){
//     let result = s1 + s2;
//     let final = [...new Set(result)].sort().join('');
//     return final;
    
// }
// console.log(longest("aimable" , "adizeye"));

// function basicOp (oper, val1 , val2){
//       if (oper === "+"){
//        return val1 + val2;
//       }

//       else if (oper === "-"){
//        return val1 - val2;
//       }

//      else if (oper === "*"){
//        return val1 * val2;
//       }
//       else if (oper === "/"){
//         return val1 / val2;
//       }
//       else {
//         return 0
//       }

// }
// console.log(basicOp("+" ,3,4));

// function check (str){
//     let upper =str.toUpperCase()

//     if (upper === str) return true
//     return false 
// }

// console.log(check("Helli HGGF"));


// function mult (m,n){
//     let result =[];
//     result.length = m 

//     for (let i = 1; i)
 
 
// }
 

// function letterCal (str) {
//     let a=1,b=2,c=3,d=4,e=5,f=6,g=7,h=8,i=9,j=10,k=11,l=12,m=13,n=14,o=15,p=16,q=17,r=18,s=19,t=20,u=21,v=22,w=23,x=24,y=25,x=26;

// }

// let str = "aimable";

// let letters = str.split('');


// console.log(letters);

// function suming(str){

    
// let [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

//  let letter = str.split('');
//  return letter.reduce ((a,b)=> a+b );
 
 

// }

// console.log(suming("aimable"));



// function wordMarking (word) {
//     let sum = 0;

// for (const char of word){
//     sum += char.charCodeAt(0) - 96;
// }
// return sum;

// }

// console.log(wordMarking("aimable"));


// function egg (str){
//     return str.replaceAll("egg",'');
// }

// console.log(egg("dddeggggeteggadf"));


// function Area (arr){
//     let newArr =[];
    
//  for (let num of arr){
//     if (num.length >1) {
//        newArr = num.push(num[0] * num[1]);
       
        
//     }
//     else if (num.length = 1) {
//         newArr = num.push(3.14 * num * num);
//     }


// arr.map (n => {
// if (n.length >1 )
    
// })
//     return newArr;
       
//  }
// }
// console.log(Area([4,[3,4],5,6,7]));

// function spreat (arr){
//     let number = [...arr].join('');
//     return Number(number);


    
// }

// console.log(spreat("123456"));


// function sortByArea (array) {
//     let result = [];  
//     let areas = array.map(n => {
//         if (n.length >1){
//             let resu= n.reduce((a,b) => a * b) ;
//           return parseFloat(resu.toFixed(2)); 
//         }
//         else {
//           let resu = (n ** 2 )* 3.14;
//           return parseFloat(resu.toFixed(2));
//         }
//     });
    
//     return  areas.sort((a,b)=> a-b);
// }
// console.log(sortByArea([ [4.23, 6.43], 1.23,   3.444,  [1.342, 3.212] ]));



// let demo = [2,4,5,6];

// if (Array.isArray(demo)){
//    console.log(demo.map (n => n*2)) ;
// }

// function spEng(sentence){

//   return sentence.toLowerCase().includes("englisH".toLowerCase());
// }

// console.log(spEng("hghdhfENglishjfj"));




// function cleaning (str){
//     return str.replace(/\d/g,"");
         
    
// }

// console.log(cleaning("fhfhgh35hfj25"));

// function checking (arr){
//     return /[arr[0].toLowerCase()]/.test(arr[1].toLowerCase());
// }

// console.log(checking(["ab", "aaa" ]));


// let  d = ["hgf","hfhf"]
//  let str1 = d[0];
//   let str2 = d[1];

// console.log(/[str1]/.test(str2));



// function counting (arr) {
//     let result = 0;

//     for (let i= 0; i<arr.length-1; i++){
    
//          if ( arr[i] > arr[i + i] ){
            
//             result ++;
//         }
//         else  {
//               result = 0 ;
//         }
         
//     }
//     return result;
// }

// console.log(counting([4,3,2]));


// function LetterCheck (arr){
//     const [str1,str2] = arr;

//     return [...new Set(str2.toLowerCase())].every (char => str1.includes(char));

 
// }

// console.log(LetterCheck(["trances", "nectar"]));

// let string = ["ghghss","hfh"];

// let uniq = [...new Set(string)];
// console.log(uniq);



// function acronom (str){
//     return str.split(' ').map(n => n[0].toUpperCase()).join('');




    // let result = ""
    //  for (const char of acron){
    //     result +=char[0];
        
    //  }
    //  return result.toUpperCase();


// }

// console.log(acronom("aimable ndizeye mugabo"));



//  function spliting (str,arr){
//     let result = []
//     let index = 0;

//     for (const num of arr){
//         result.push(str.slice(index , index+num))
//         index +=num;
//     }

//     return result;
//  }

//  console.log(spliting("1234567890",[4, 4]));



// function solve (s){
    
//     return s.split('').map(n => {
//         if ( n === "a"){
//             return "b";
//         }
//         else if (n === "z"){
//             return "y";
//         }
//         else {
//             s.fromCharCode(n.charCodeAt(0) + 1);
//         }
//     } )
// }

// console.log(solve("AImable"));




//  Learning how to concating different dataType 

// let a = "5";
// let b = "7";

// console.log(...a,...b);




// function solve (n) {
//   if (n === "0") return "0";
//   if (n === "1") return "1";

//   let a = "0";
//   let b = "1";

//   for (let i=2; i<=n; i++){
//     [a,b] = [a, a+b];
//   }

//   return b;
     
// }

// console.log(solve(4));




// function last (data){
  // if (data === "string"){
  //   return data.at(-1);
  // }
  // else if (Array.isArray(data)){
  //   return data.slice(-1).join('');
  // }


//  if (typeof data === 'number' && !isNaN(data)) {
//   return data.toString();
//  }
//   return data.at(-1);
// }

// console.log(last(6,5));


// let word = "Visit W3schools"
// console.log(word.match("W3schools"));



// let text = "Visit Microsoft";
// console.log (text.replace(/Microsoft/i,"W3schools"));



// function dna (str){
//     const letters = str.split(" ").map(n => n.replace (/t/gi, "A") || n.replace (/a/gi, "T") || n.replace(/g/gi,"C") || n.replace(/c/gi,"G")).join();
//     return letters;
        
// }

// console.log(dna("ATTGC"));


// function noRepeat (str) {
//     let newArr = str.split("").sort(); 
//      for (let i=0; i<newArr.length-1; i++){
          
//      }
 
// }

// console.log(noRepeat("aacddea"));

// function switching (arr) {
//     return arr.map (n => n === true? false:true);
// }

// console.log(switching([true,false,false,true,true]));


// function rotation (arr) {
//     let count = 0;
    
//     for (let  i=0; i<arr.length-1; i++){
//         if (arr[i] > arr[i])return true;
//     }
// }

// console.log(rotation([3,3,3,3]));


// function mergeArr (arr1,arr2){
//     let newArr1 = [...new Set(arr1)];
//      let newArr2 = [...new Set(arr2)];

//      return [...newArr1,...newArr2].sort((a,b)=> a-b);
   
// }

// console.log(mergeArr([1,4,1,5,6,1],[1,5,6,90,34]));


// function checkRoot (nums){
//     let newArr = nums.replaceAll(",","").split('');
//     let number = newArr.map(n => Number(n));
    
//     if (number.every((n,index) => n !==index +1)){
//           return "Not consecutive"
//     }
//     else if (number.length ===4 || number.every(val => isNaN(Number(val)))){
//         return "Incorrect input"
//     }
//     else {
//     let sum = number.reduce((a,b) => a * b);
//     let square = sum + 1
//     return Math.sqrt(square);
//     }
   
// }

// console.log(checkRoot("1,2,3,6,5,6"));


// let arr = [1,2,3];
// arr[10] =90;

// console.log(arr.length);


// const arr = [1,2,3,4,5];

// const result = arr.filter ((n,i) => i % 2 ===0).map (n => n*2);

// console.log(result);



// const numb = [1,1,1,1,5];
// let sameing = numb.every (n => n ==numb[0]);

// console.log(sameing);



// function squareOrSquareRoot(array) {
//     const arr = array.map (n => {
//         if (Math.floor(Math.sqrt(n)) === Math.ceil(Math.sqrt(n)) ){
//             return Math.sqrt(n);
//         }
//         else {
//             return n ** 2;
//         }
           
//     })
//      return arr;  
// }

// console.log(squareOrSquareRoot([1,2,3,4,9,16,15]));





//  const name =[1,2,3];

//  console.log(name.reverse());




//  function binRota (arr) {

//     let newArr = arr.map ((val,index) =>  {
//         if (index %2 !==0) {
//             return val.reverse()
//         }
//         return val;
    
//   });
//   return newArr.flat();
//   }
//   console.log( binRota([[1,2,3],[3,45,6],[4,52,8],[6,7,9],[4,6,7],[21,76,8]]));





  // Finding non-duplicate 


//   function nonDuplicate (n){
//     const arr = n.split('');
  
//     let uniq = arr.filter ((value ) => {
//         if (arr.indexOf(value) === arr.lastIndexOf(value)) {
//          console.log(value) ;
//         }
//         else {
//             console.log(arr[0]) ;
//         }
     
//     });
//         // console.log(...uniq);

//   }

//   nonDuplicate("aabbccdde");




// const [a ,b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z] =
//  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]


//  function letterToNumber (sent) {

//  }

// function letterToString(n) {
//     const result = n.split('').map(Number); 
//     return result;
// }

// console.log(letterToString("Ilove u"));


// Consecutive integers 




// function checking (numbers) {
//   let newArr = numbers.split(',');
//   let arr = newArr.reduce((a,b) => Number(a) * Number(b)) +1;
//   if (Math.ceil(Math.sqrt(arr)) !== Math.floor(Math.sqrt(arr))) {
//     return "Not consecutive";
//   }
//   else if (newArr.length >4 || newArr.length <4 || newArr.some(n => Number(n) !== "number")) {
//       return "Incorrect input";
//   }
//   else {
//         return Math.sqrt(arr);
//   }
  

// }

// console.log(checking('4,5,6,7'));




//  function task1 () {
//   return new Promise ((resolve, reject) => {
//      setTimeout (() => {
//       // console.log("Task 1 Completed !")
//       resolve (10)
//      })
//   })
//  }


//  async function getTask() {
//    const result = await task1()
//    const finalResult = await (result *2);
//    console.log(result);
//    console.log(finalResult);
//  }

//  getTask();



// task1 ().then ((result)  => {
//     console.log(result)
//     return result * 2


// }).then (result => console.log(result));


   



// function arrayPacking (arr) {
//   if (arr.length <1 || arr.length>4 || arr.some(n => n >=256 || n<0)) {
//     return arr;
//   }
//   let newArr = arr.map(n =>n.toString(2).padStart(8,'0'));
//     newArr.reverse();
     
//   let finalArr = newArr.join('');
  
//    return parseInt (finalArr,2);
// }

// console.log(arrayPacking([ 155, 5, 8, 111 ]));



// let bin = '001001110010110100010111'

// let result = parseInt(bin,2);

// console.log(result);





// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ]);
//     }, 1000);
//   });
// }

// getUsers().then (result => console.log(result));



// function findDeletedNumber(n,m) {
//     let word = "Deletion";
   

// if (n.length === m.length ) return  0 +`,No ${word.toLowerCase()}`;

//  let firstSum = n.reduce ((a,b)=> a+b);
//  let secondSum = m.reduce((a,b) => a+b);
//   let diff = firstSum - secondSum;

//  return `${diff}, ${word}`;

   
// }
// console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5,2]));






// function moveZeros (arr){
//    let zeroes = arr.filter (n => n === 0);
//    let nonZeroes = arr.filter(n => n !==0)
//     nonZeroes.push(...zeroes);
//    return nonZeroes;
// }

// console.log (moveZeros(["r",5,0,6,3,"t",-1,0,2,false]));


 // Learning Nested loop 



// function  increase (arr) {
//   let newArr = [];

//   newArr.push(arr)* arr[1];

//   return newArr

// }

// console.log(increase([5,3]));


// function findEmployeesRole(name) {
//   let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"},
//                     {firstName: "smith", lastName: "aimable", role: "Truck Driver"} ]

//   for ( let i=0; i<employees.length; i++) {
//     if (name ===employees[i].firstName ||
//         name ===employees[i].lastName ||
//         name === employees[i].firstName + " " + employees[i].lastName)  {
//     return employees[i].role 
//     }
 
//   }
//     return "Does not Work here!"
// }

// console.log(findEmployeesRole("Dipper Pines"));




// function sumDigPow (a,b) {
//  let arr =[]

//   for (let i=a; i<=b; i++) {
//        arr.push(i)
//   }
 
//   let newArr = []

//   for (let j=0; j<arr.length; j++) {
    
//       let char = arr[j].toString() 
  
//      let nums =  char.split('').map(Number);

//      newArr.push (nums);
    
// }
//  let last =[];

//  for (let k=0; k<newArr.length; k++) {
       
//     last.push(newArr[k].map((val,index) => val** (index+1)).reduce((a,b) => a+b,0));
      
//  }
//  let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === last[i]) {
//       result.push(arr[i]);
//     }
//   }

// return result;
// }
//  console.log(sumDigPow(1,100));


// function trickyDoubles (n) {
//   let nums = n.toString();
//   if (nums.length %2 !==0) {
//     return Number(nums)*2;

//   }

//   let half = nums.length/2;

//   let left = nums.slice(0,half).split('').map(Number);
//   let right = nums.slice(half).split('').map(Number);

//     let  newArr;
  
//    for (let i=0; i<left.length; i++){
//       newArr = [...left,...right]
//       let  arr = newArr.join('');
//       let digit = Number(arr);

//     if (left[i] === right[i]) {

//       return digit;   
//  }

//  else {

//   return digit *2;
 
//  }
//    }
   
//    return digit;    
// }
// console.log(trickyDoubles(1212));




// function orderWeight(str) {
//    let arr = str.split(' ');
//    let nums = arr.map(Number);
//    let newArr =[]
//    for (let i=0; i<arr.length; i++) {
//       newArr.push (arr[i].split('').map(Number).reduce((a,b)=> a+b,0));
//       newArr.sort((a,b) => a-b); 
//    }
  
//      for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//          if (newArr[i] > newArr[j]) {
//             [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//          }
//       }
//    }
//    return nums.join(' ');  
// } 
// console.log(orderWeight("56 65 74 100 99 68 86 180 90"));


// 




// XHR Exercise 



// Q6



//   function asyncCounter()  {

//    try {

//       return new Promise ((resolve,reject) => {
//       let arr =[]
//       setTimeout(() => {
//         for (let i=1; i<=5; i++) {
//           console.log(i);
//           arr.push(i);  
//       }
//        resolve(arr);
          
//       },1000)
   
//   })

//    }
//     catch (error) {
//       console.error(error)
//     } 
// }
// asyncCounter().
//                then (value => console.log(value))
//                .catch (error => console.log(error));





// function productSum (arr,m) {
//   let nums = []
//   for (let i=0; i<arr.length; i++){
//     for (let j= i+1; j<arr.length; j++) {
//       for (let k= j+1; k<arr.length; k++) {
//         nums.push(arr[i]+arr[j]+arr[k])

//       }
    
//     }
//   }
//   console.log(nums)
// }

// productSum([2, 3, 1, 2, 4, 3], 3);




// function likes (arr) {
//   let size = arr.length -2;
  
//   if (arr.length === 0) {
//     return "no one likes this";
//   }
//   else if(arr.length ===1) {
//     return `${arr[0]} likes this `;
//   }

//   else if (arr.length === 2){
//     return `${arr[0]} and ${arr[1]} likes this`;
//   }
//   else {
//        return `${arr[0]} , ${arr[1]} and ${size} others like this`;
  
// }
// }

// console.log(likes(["Aimable","Mugabo","hgfh","fghwe","hehe"]));








// function  insideOut (str) {
//   let arr =  str.split(' ');
//   for (let i=0; i<arr.length; i++) {
//     if (arr[i].length %2 ===0 && arr[i] > 2) {

//     }
//   }
// }
 

// console.log(insideOut("aimable is a good man"));



// let word = "ubug" 
// let arr = word.split('');
// let a = arr.length /2  ;
// let b = arr.length/2 -1;
//  let before = arr.at(a);
//  let after = arr.at(b);
// let newArr = arr.filter(n => n !==before && n !==after);

//    newArr.push(after);
//    newArr.unshift(before)

// console.log(newArr);



// function add (arr,k) {
//   let sum =0
//   for (let i=0; i<k; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// console.log(add ([2,3,4,5,6,7,8],3));






// function maxSubarraySum(arr, k) {
//  // let maxSum = -Infinity;

//   for (let i = 0; i <= arr.length - k; i++) {
     
//     //let currentSum = 0;

//     for (let j = 0; j < k; j++) {
//       //currentSum += arr[i + j];
//       console.log(arr[i + j])
//     }

//     // maxSum = Math.max(maxSum, currentSum);
//   }

//   // return maxSum;

  
// }
// maxSubarraySum([2,3,4,5,6,7,8],3); 




// Is a Palindrome
// using Loops 

// function goThrough(str) {
//       let arr = str.split('');

//       let arr1 =[];
//       let arr2 = [];
      
//       for (let i=0; i<arr.length; i++){

//         arr1.push(arr[1]);
        

//       }
//         for (let j=arr.length-1; j>=0; j--) {
//          arr2.push(arr[j]);
//         }

//         for (let k=0; k<arr2.length; k++) {
          
//         }

//        if (arr1.includes(arr2[k])) return true;

//        return false;

        
      
// }

// console.log(goThrough("pullup"));




// function counting (n) {
//   let count = []
//   let arr =["call","call","call","call","call"]
//   for (let i=n; i<arr.length; i++){

//     if(arr[i] === "call") {
//        count.push(count ++);
//     }
//     count++;

//   }

//   return count;
// }

// console.log(counting(10));




// function countInversions (arr) {

//       const  sorted = arr.sort((a,b) => a-b)
//       let count =0;

//       for (let i=0; i<sorted.length; i++) {

//          for (let j= 0; j<arr.length; j++) {  
          
//         if (sorted[i] !== arr[j]) {
//           count ++;
//         }
         
//         }
          
//         }
//         return count/2;
     
// }

// console.log(countInversions([4,1,2,3]));



// function counting(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

// console.log(counting([4, 3, 2, 1])); // 6





// function checkCollision (x1,y1,r1,x2,y2,r2) {
//   // let sumRadius = 2 *(r1 + r2);
//   let sumX = Math.abs(x1) + 2*r1;
//   let sumY = Math.abs(y1) + 2*r1;

//   return sumY;

//   // if (sumX == Math.abs(x2) && sumY == Math.abs(y2)){
//   //   return true;
//   // }
//   // else {
//   //   return false;
//   // }
  
// }
// console.log(checkCollision(-1, 1, 6, -10.1, 1.1, 1));







//function anagram (test, original) {
  // let testArr = test.toLowerCase().split('');
  // let originalArr = original.toLowerCase().split('');

  // if (testArr.length === originalArr.length && testArr.every(n => originalArr.includes(n)) ) {
  //   return true ;

  // }
  // else {
  //   return false;
  // }

 // return /test/i.test(original);

  
//}

//console.log(anagram("ound", "round"));





// function removing (arr) {

//   let  newArr =arr.filter(n => n !== Number(n));

//   let allUpper =  newArr.join('').toUpperCase();
//   let vowel = ["A","E","O","U","I"];
//   let vow =[]
  

//  if (vowel.some(n => allUpper.includes(n))){

//  }
// }

// console.log(removing([1,"a","B",5,3,"c"]));




// function spreading (arr) {
  
//   let str = arr.join();

//   let num = str.replaceAll(".","").trim().split('').map(n => Number(n));
//     let newArr = [];
//     for (let i=1; i<=num[0]; i++) {
//       newArr.push(i);
//     }
//     return newArr;
  
// }
// console.log(spreading(["...5"]));





// function unSquareDigit (n) {
//   let arr = n.toString().split('').map(Number);

//   let newarr = [];

//   for (let i=0;  i<arr.length; i++) {

//     let square = Math.sqrt(arr[i]);

//     if (!Number.isInteger(square)) {
//       let two = `${arr[i]}` 
     
//       newarr.push(two);
      
//     }
       
//   }
//   return newarr.map(Number);
// }
// console.log(unSquareDigit(81181));






// idea of doing reverse 














 



















  




  








































































