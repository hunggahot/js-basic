// Object Constructor

var User = function (firstName, lastName, avatar) { // Viết hoa chữ cái đầu của tên Object Constructor - Quy ước chung
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Hung', 'Lam', 'Avt');
var user = new User('Quoc', 'Tuan', 'Avt');

author.title = 'I am the best!'
user.comment = 'Comment! nay bae'

console.log(author)
console.log(user)

console.log(author.getName())
console.log(user.getName())