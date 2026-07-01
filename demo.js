

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


