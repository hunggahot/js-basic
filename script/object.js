// Object trong Javascript

var schoolKey = 'schoolName'

var myInfo = {
    name: 'Quoc Hung', // key: value
    age: 22,
    address: 'Ho Chi Minh, VN',
    [schoolKey]: 'Hutech',
    getName: function () {
        return this.name
    }
}

// Function --> Phương thức / method
// Others --> Thuộc tính / property

delete myInfo.age

var myKey = 'address'

myInfo.email = 'lamquochung@gmail.com'

myInfo['full-name'] = 'lamquochung'

console.log(myInfo)
console.log(myInfo.name)

console.log(myInfo[myKey]);

console.log(myInfo.getName())