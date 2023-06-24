// For/in Loop: Lấy ra những key của đối tượng

var myInfo = {
    name: 'Hung',
    age: 22,
    address: 'HCM'
}

for (var key in myInfo) {
    // code
    console.log(myInfo[key])
}

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
]

for (var key in languages) {
    console.log(languages[key])
}

var myString = 'Javascript'

for (var key in myString) {
    console.log(myString[key])
}



function run(object) {
    var arr = []
    for (var key in object) {
        arr.push('Thuộc tính ' + key + ' có giá trị ' + object[key])
    }
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
