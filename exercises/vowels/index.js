// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	// without g it stops at first match; i means case insensitive
	let matches = str.match(/[aeiou]/gi);
	// need 0 if false
	return matches ? matches.length : 0;
}

module.exports = vowels;

// for of loop / iterator

// function vowels(str) {
// 	let counter = 0;
// 	let vees = ["a", "e", "i", "o", "u"];

// 	for (let char of str.toLowerCase()) {
// 		if (vees.includes(char)) {
// 			counter++;
// 		}
// 	}
// 	return counter;
// }

// Less elegant solution
// function vowels(str) {
// 	let arr = str.toLowerCase().split("");
// 	let v = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (
// 			arr[i] === "a" ||
// 			arr[i] === "e" ||
// 			arr[i] === "i" ||
// 			arr[i] === "o" ||
// 			arr[i] === "u"
// 		) {
// 			v.push(arr[i]);
// 		}
// 	}

// 	return v.length;
// }
