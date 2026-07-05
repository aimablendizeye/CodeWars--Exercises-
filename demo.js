

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


const person = {
    name: "aimable",
    age : 24,
    status : "single"
    
}

const propertyi = Object.entries(person)
console.log(propertyi)

const arr = [2,5,7,4,6,3]
const newArr = [...arr , 4]

console.log(newArr);


const multipleArr = [
    ["name", "Aimable"] 
    ,["age" , 45]
]

const obj = Object.fromEntries(multipleArr)

console.log(obj);

