/*
Làm việc với Array

Keyword: Javascript array methods

1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
*/

var languages = [
    'Javascript',
    'Java',
    'React',
    'C#'
]

console.log(languages.toString()) // Chuyển mảng thành chuỗi

console.log(languages.join(', ')) // Thêm ký tự ngăn cách giữa 2 element

console.log(languages.pop()) // Xóa element cuối mảng và trả về phần tử đã xóa
console.log(languages)

console.log(languages.push('PHP')) // Thêm element ở cuối mảng
console.log(languages)

console.log(languages.shift()) // Xóa element ở đầu mảng và trả về phần tử đã xóa
console.log(languages)

console.log(languages.unshift('C++', 'Ruby')) // Thêm element ở đầu mảng 
console.log(languages)

languages.splice(2, 3) // Xóa đi phần tử bắt đầu index chỉ định và số lượng phần tử cần được xóa tiếp theo đó
console.log(languages)

languages.splice(1, 0, 'Hung') // Chèn phần tử vào index chỉ định
console.log(languages)

languages.splice(1, 1, 'Lam') // Xóa và chèn phần tử vào index chỉ định
console.log(languages)

var languages2 = [
    'Lam',
    'Hung'
]

console.log(languages.concat(languages2)) // Merge 2 mảng vào nhau

console.log(languages.slice(1, 2)) // Cắt element trong mảng
