// Đối tượng Date

// Keyword: Javascript date object mozilla

var date = new Date();

console.log(date)

var year = date.getFullYear();
var month = date.getMonth() + 1; // vì tháng 1 sẽ là 0
var day = date.getDate()
var hour = date.getHours()
var minute = date.getMinutes()
var second = date.getSeconds()

console.log(year)
console.log(month)
console.log(day)

console.log(`${day}/${month}/${year}`)
console.log(`${hour}:${minute}:${second}`)