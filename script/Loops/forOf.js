// For/of Loop: Lấy ra những phần tử của mảng, từng chữ cái của chữ

var languages = [
    'Javascript',
    'PHP',
    'Java'
]

for (var value of languages) {
    console.log(value)
}

var myString = 'Javascript'

for (var value of myString) {
    console.log(value)
}

var myInfo = {
    name: 'Lam Hung',
    age: 22
}

console.log(Object.values(myInfo))

for (var value of Object.keys(myInfo)) {
    console.log(myInfo[value])
}

for (var value of Object.values(myInfo)) {
    console.log(value)
}
