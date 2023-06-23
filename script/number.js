/*
Kiểu số (Number) trong Javacript

1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? Tại sao?
    - Kiểm tra data type

2. Làm việc với Number
    - To string
    - To Fixed
*/

// Keyword: Javascript number methods

var age = 18
var PI = 3.14

var myString = PI.toString();

var result = 20 / 'ABC'

console.log(isNaN(result))
console.log(Number.isFinite(result))

console.log(typeof age.toString())
console.log(typeof myString)

console.log(PI.toFixed())
