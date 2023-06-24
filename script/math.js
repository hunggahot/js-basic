/*
Math Object

- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()
*/

console.log(Math.PI)

console.log(Math.round(1.5)) // Làm tròn số

console.log(Math.abs(-4)) // Giá trị tuyệt đối

console.log(Math.ceil(4.1)) // Làm tròn trên

console.log(Math.floor(4.9)) // Làm tròn dưới

console.log(Math.random()) // Trả về dãy số ngẫu nhiên nhỏ hơn 1

var random5 = Math.floor(Math.random() * 5)
var random100 = Math.floor(Math.random() * 100)

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
]

console.log(bonus[random5])

if (random100 < 50) {
    console.log('Success!')
}

var min = Math.min(-100, 1, 90, 23)
var max = Math.max(-100, 1, 90, 23)

console.log(min)
console.log(max)
