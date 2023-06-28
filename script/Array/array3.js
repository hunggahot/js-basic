/*
    Array methods
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce() Khi muốn nhận về giá trị duy nhất sau khi tính toán và xử lý trên array
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 200
    },
    {
        id: 2,
        name: 'HTML CSS',
        coin: 300
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 500
    },
]

courses.forEach(function (course, index) { // Duyệt qua phần tử của mảng
    console.log(index, course)
});

var isFree1 = courses.every(function (course, index) { // Bắt buộc duyệt qua tất cả phần tử phải thỏa mãn hết điều kiện
    console.log(index)
    return course.coin === 0
});

console.log(isFree1)

var isFree2 = courses.some(function (course, index) { // Giống như every, khác ở chỗ trả về true khi chỉ cần thỏa mãn 1 điều kiện đúng
    console.log(index)
    return course.coin === 0
});

console.log(isFree2)

var course = courses.find(function (course, index) { // Tìm CHỈ MỘT phần tử trong mảng thỏa mãn điều kiện
    console.log(index)
    return course.name === 'Ruby'
});

console.log(course)

var course = courses.filter(function (course, index) { // Tìm kiếm NHIỀU phần tử trong mảng thỏa mãn điều kiện
    console.log(index)
    return course.name === 'Ruby'
});

console.log(course)


// hãy tạo hàm getMostFavoriteSport có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.

const sport = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(arr) {
    return sport.filter(function (sport) {
        return sport.like > 5
    })
}

// Kỳ vọng
console.log(getMostFavoriteSport(sport))
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]




function courseHandler(course, index) {
    // console.log(course)
    return {
        id: course.id,
        name: `Khoa hoc:  ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: course
    }
}

function courseHandler(course, index) {
    // console.log(course)
    return course.name

}

// Cú pháp của map() như sau:

// array.map(function(element, index, array) {   // Code xử lý được áp dụng vào mỗi phần tử của mảng });

// Trong đó:

// function(element, index, array) là hàm xử lý áp dụng vào mỗi phần tử của mảng.
// element: giá trị của phần tử hiện tại được xử lý.
// index: chỉ số (index) của phần tử đó trong mảng gốc.
// array: mảng gốc đang được xử lý.

var newCourses = courses.map(courseHandler); // đối số nằm trong hàm map() phải là một function

console.log(newCourses)

var totalCoin1 = 0 // Biến lưu trữ

for (var course of course) { // lặp qua các phần tử

    // Thực hiện việc lưu trữ
    totalCoin += course.coin
}

var i = 0

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++

    var total = accumulator + currentValue.coin

    console.table({
        'Lượt chạy ': i,
        'Biến tích trữ ': accumulator,
        'Giá khóa học': currentValue.coin,
        'Tích trữ được': total
    })

    return total
}

var totalCoin = courses.reduce(coinHandler, 0) // initial value

console.log(totalCoin)

// Reduce Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. Hãy tạo hàm getTotalGold có 1 tham số là mảng. Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được trong kỳ SEA Game lần này.

var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(arr) {
    return arr.reduce((goldHanler, sport) => goldHanler + sport.gold, 0)
}


// Expected results:
console.log(getTotalGold(sports)) // Output: 23


