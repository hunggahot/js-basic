// 1. Xác định được điểm dừng
// 2. Logic handle => Tạo ra điểm dừng

function countDown(num) {
    if (num > 0) {
        console.log(num)
        return countDown(num - 1)
    }
    return num
}

countDown(3)

function loop(start, end, cb) {
    if (start < end) {
        cb(start)
        return loop(start + 1, end, cb)
    }
}

var array = [
    'Javascript',
    'PHP',
    'Ruby'
]

loop(0, array.length, function (index) {
    console.log('index: ', index)
    console.log(array[index])
})

// 3! = 3 * 2 * 1

function giaiThua(num) {
    if (num > 0) {
        return num * giaiThua(num - 1)
    }
    return 1
}

console.log(giaiThua(5))
