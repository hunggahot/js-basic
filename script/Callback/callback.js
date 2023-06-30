// Callback?

// Là hàm (function) được truyền qua đối số khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số

function myFunction(param) {
    param('Học lập trình')
}

function myCallback(value) {
    console.log('Value: ', value)
}

myFunction(myCallback)

//////////////////////////////////////////
//hoàn thành function sumCb và tạo thêm các function subCb, multiCb và divCb.

function sumCb(a, b) {
    return a + b
}

function subCb(a, b) {
    return a - b
}

function multiCb(a, b) {
    return a * b
}

function divCb(a, b) {
    return a / b
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
console.log(caculate(1, 2, sumCb)) // Output: 3
caculate(1, 2, subCb) // Output: -1
caculate(1, 2, multiCb) // Output: 2
caculate(3, 1, divCb) // Output: 3


// Callback - Part 2

Array.prototype.map2 = function (callback) {
    var output = [], arrayLength = this.length
    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i)
        output.push(result)
    }

    return output
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]

var htmls = courses.map2(function (course) {
    return `<h2>${course}</h2>`
})

// var htmls = courses.map(function (course) {
//     return `<h2>${course}</h2>`
// })

console.log(htmls.join(''))



var courses = new Array(10)

courses.push('Javascript', 'PHP')

console.log(courses)

for (var index in courses) {
    console.log(courses[index])
}

/////////////////////////////////////////////

Array.prototype.myMap = function (cb) {
    var output = [], arrayLength = this.length

    for (var i = 0; i < arrayLength; i++) {
        output.push(cb(this[i], i))
    }
    return output
}

// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]
