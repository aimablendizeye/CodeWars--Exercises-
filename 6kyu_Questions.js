
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