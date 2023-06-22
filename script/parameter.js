// Tham số hàm - Javascript cơ bản

/*
1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private?
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for
 */

// function writeLog(message, message2) {
//     if (message) {
//         console.log(message)
//     }

//     if (message2) {
//         console.log(message2)
//     }
// }

// writeLog();

// function writeLog() {
//     console.log(arguments)
// }

// writeLog('Log 1', 'Log2')

function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}

writeLog('Log 1', 'Log 2', 'Log 3', 4, 5)