// For Loop
var n = 5
for (var i = 1; i <= n; i++) {
    console.log(i)
}

var i = 1
for (; i <= n;) {
    console.log('a = ' + i)
    i++
}

var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Hung'
]

var arrLength = myArray.length

for (var i = 0; i < arrLength; i++) {
    console.log(myArray[i])
}

/**
 * 👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
 */

function getRandNumbers(min, max, length) {
    var array = []
    for (var i = 1; i <= length; i++) {
        var rand = Math.floor(Math.random() * (max - min) + min)
        array.push(rand)
    }
    return array
}

console.log(getRandNumbers(9, 78, 8))


//Tổng các phần tử trong mảng
function getTotals(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(getTotals([1, 2, 3]))


/**
Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.

Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.
 */


var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders) {
    var sum = 0
    for (var i = 0; i < orders.length; i++) {
        sum += orders[i].price
    }
    return sum
}

// Expected results:
console.log(getTotal(orders)) // Output: 8700000