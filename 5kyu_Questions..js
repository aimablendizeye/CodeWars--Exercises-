


function increment(str) {
  
  let arr = str.split('').map(Number)
   let string = str.match(/[A-Za-z]/g).join("")  
  let numbers = str.match(/\d+/g)
  if (numbers == null) {
    return [...string,1].join('')
  }
  else {
     let part = str.lastIndexOf("0");
    let part1 = str.slice(0,part)
    let part2 = str.slice(part)
     let incr =  Number(part2) + 1 ;
    return [...part1,incr].join("")
  }
}

console.log(increment("fooo000999"))