// 1
function repeat (arr,limit) {
  let newArr =[];
  for (let i=0; i<arr.length; i+=limit){
        let batch = arr.slice(i , i+limit)
        newArr.push(batch)
  }
  return newArr;
  
}

console.log(repeat([2,3,4,5,6,7,8],2));