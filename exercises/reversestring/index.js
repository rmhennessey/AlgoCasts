// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let rev = [];
	for (let i = 0; i < str.length; i++) {
		rev.unshift(str[i]);
	}
	return rev.join("");
}

module.exports = reverse;

//
// str.split("").reverse().join("");

// without using reverse
// let rev = [];
// for (let i = 0; i < str.length; i++) {
//     rev.unshift(str[i]);
// }
// return rev.join("")
