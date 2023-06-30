// HTML DOM

// Có 3 thành phần

/**
 * 1. Element: ID, class, tag, CSS selector, HTML collection
 * 2. Attribute
 * 3. Text
 */

// Node: điểm giao nhau

//--------------------------------------------------------------//

// Javascript: Brower | Server (NodeJS)

// API: Application Programming Interface

// Broswer: HTML -> DOM -> WEB API

console.log(document)

document.write('Hello LamHungw') // Ghi vào DOM

var headingIdNode = document.getElementById('heading')

console.log(headingIdNode)

console.log({
    element: headingIdNode
})

var headingClassNodes = document.getElementsByClassName('heading')

console.log(headingClassNodes)

var headingTagNodes = document.getElementsByTagName('p')

console.log(headingTagNodes)

var headingQuerySelector = document.querySelector('.heading')

console.log(headingQuerySelector)

var headingQuerySelectors = document.querySelector('.box .heading-2')

console.log(headingQuerySelectors)

var headingQuerySelectorFirstChild = document.querySelector('.box .heading-2:first-child')

console.log(headingQuerySelectorFirstChild)

var headingQuerySelectorSecondChild = document.querySelector('.box .heading-2:nth-child(2)')

console.log(headingQuerySelectorSecondChild)

var headingQuerySelectorAll = document.querySelectorAll('.box .heading-2')

console.log(headingQuerySelectorAll)
console.log(headingQuerySelectorAll[2])

console.log(document.forms)
console.log(document.forms[1])
console.log(document.forms['form-1'])

console.log(document.anchors) // Lọc thẻ a

console.log(document.images) // lọc image
