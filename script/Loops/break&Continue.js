// Break & Continue in Loop

for (var i = 0; i < 10; i++) {
    console.log(i)

    if (i >= 5) {
        break
    }
}

for (var i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue
    }

    console.log(i)
}