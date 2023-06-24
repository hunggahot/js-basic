/*
Object Prototype - Basic

1. Prototype là gì? Là nguyên mẫu tạo nên một đối tượng
2. Sử dụng khi nào?
*/
function User(firstName, lastName, avatar) { // Viết hoa chữ cái đầu của tên Object Constructor - Quy ước chung
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    User.prototype.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className = 'VTI'
User.prototype.getClassName = function () {
    return this.className
}

var user1 = new User('Hung', 'Lam', 'Avt 1');
var user2 = new User('Quoc', 'Tuan', 'Avt 2');


console.log(user1)
console.log(user2.getClassName())