/*
Mảng trong Javascript - Array

1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra data type?
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/

var languages = [
    'Javascript',
    'Java',
    'React',
    'English',
    null,
    undefined,
    function () { },
    {},
    123
];

console.log(languages)

console.log(Array.isArray(languages))

console.log(languages[2])
