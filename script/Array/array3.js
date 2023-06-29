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


var totalGold = sports.reduce(function (total, sport) {
    return total + sport.gold
}, 0)

console.log(`Tổng số huy chương: ${totalGold}`)


var numbers = [200, 300, 0, 400, 500]

var totalCoinNum = numbers.reduce(function (total, number) {
    return total + number
})

console.log(totalCoinNum)

///////////////////////////////////////////////////////////////////////////////////////////////////

// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var i = 0
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    i++
    console.table({
        'Lượt chạy ': i,
        'flatOutput ': flatOutput,
        'depthItem': depthItem,
        'result': flatOutput.concat(depthItem)
    })
    return flatOutput.concat(depthItem)
}, [])

console.log(flatArray)


// Lấy ra các khóa học đưa vào 1 mảng mới
var topics1 = [
    {
        topic1: "Front-end",
        courses2: [
            {
                id: 1,
                title: "HTML & CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic1: "Back-end",
        courses2: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]

var j = 0
var newCourses1 = topics1.reduce(function (courses2, topic1) {
    j++
    console.table({
        'Lượt chạy ': j,
        'course ': courses2,
        'topic': topic1,
        'result': courses2.concat(topic1.courses2)
    })
    return courses2.concat(topic1.courses2);

}, [])

console.log(newCourses1)

var htmls = newCourses1.map(function (course) {
    return `
        <div>
            <h2>${course.title}<h2>
            <p>Id: ${course.id}<p>
        </div>
    `
})

console.log(htmls.join(''))


/////////////////////////////////////////////////////////////////////////////

// Cho trước danh sách một số bộ phim, hãy viết hàm calculateRating để tính điểm trung bình IMDB của những bộ phim mà Christopher Nolan làm đạo diễn.


var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
    }
];

function calculateRating(watchList) {
    var nolanMovies = watchList.filter(function (watchList) {
        return watchList.Director === 'Christopher Nolan'
    })
    var totalIMDB = nolanMovies.reduce(function (a, b) {
        return (a + Number(b.imdbRating))
    }, 0)
    return totalIMDB / nolanMovies.length
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675