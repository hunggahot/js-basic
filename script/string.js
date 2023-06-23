// Làm việc với chuỗi

var myString = '   Lam Quoc Hung Lam    ';

// Keyword: Javascript string methods

// 1. Length
console.log(myString.length)

// 2. Find index
console.log(myString.indexOf('Hu'))
console.log(myString.lastIndexOf('Hu'))

// 3. Cut string
console.log(myString.slice(4, 8))

// 4. Replace
console.log(myString.replace('Lam', 'Tran'))
console.log(myString.replace(/Lam/g, 'Tuan'))

// 5. Convert to upper case
console.log(myString.toUpperCase())

// 6. Convert to lower case
console.log(myString.toLowerCase())

// 7. Trim
console.log(myString.trim())

// 8. Split
var languages = 'javascript, php, react'

console.log(languages.split(', '))

// 9. Get a character by index
const myString2 = 'Lam Hung w';

console.log(myString2.charAt(0))
