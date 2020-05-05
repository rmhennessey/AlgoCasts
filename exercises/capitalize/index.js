// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // solution using "for of" loop
  words = []

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');

  return result;

}

module.exports = capitalize;


// My first solution using for loop
// create empty array to push to
// let z = []
// // split the string at the space
// let splitter = str.split(" ");
// // console.log(splitter)
// // loop through each new string, grabbing first letter & capitalizing
// // then slicing
// // then adding back to together
// for (let i = 0; i < splitter.length; i++) {
//   const x = splitter[i][0].toUpperCase()
//   const y = splitter[i].slice(1)
//   z.push(x + y)
// }
// return (z.join(' '))

// Option #3
// let result = str[0].toUpperCase();

// for (let i = 1; i < str.length; i++) {
//   if (str[i - 1] === ' ') {
//     result += str[i].toUpperCase();
//   } else {
//     result += str[i]
//   }
// }


