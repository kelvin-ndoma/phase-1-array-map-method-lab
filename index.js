const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// //- `titleCased()`: returns an array with title case tutorial names. Note that
// this function takes no arguments and should use the global `tutorials`
// variable as data.
//had to remove the array mo
const titleCased = () => {
  return tutorials.map((array) => {
    const firstArray = array.split(' ')
    //returns the map of the whole array. Removing need to have a FOR loop.
  //the arrow function then invokes a variable which = each line of array and splits to individual words
  //placing in secondArray.
    
    const secondArray = firstArray.map((string) => string.charAt(0).toUpperCase() + string.slice(1))
     //a second variable is invoked which = the map of the new array of words,
  //it then takes first letter of word[0] and puts toUpperCase and holds the rest of the word back to be joined back
    return secondArray.join(' ') //then returns updated array.
  })
}