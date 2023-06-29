const numbers = [1, 2, 3, 4, 5]

var result = numbers.reduce((total, number) => {

    console.table({
        'total': total,
        'number': number,
        'result': total + number
    })
    return total + number
})

console.log(result)


// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

function arrToObj(arr) {
    return arr.reduce(function (value, current) {
        console.table({
            values: value,
            current: current,
            key: current[0],
            value: current[1],
            result: value[current[0]] = current[1]
        })

        value[current[0]] = current[1]

        return value
    }, {})
}

console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }