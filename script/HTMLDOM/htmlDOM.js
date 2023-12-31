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


//-----------------------------------------------------------------------//

var boxNode = document.querySelector('.box-1')

// Công viêc 1: SỬ dụng tới `boxNode`
// ...
console.log(boxNode)

// Công việc 2: Sử dụng tới các li elements là con của `.box-1`

console.log(boxNode.querySelectorAll('li'))
console.log(boxNode.getElementsByTagName('li'))
console.log(boxNode.getElementsByTagName('p'))



//DOM Attribute

var headingElement = document.querySelector('h1')

headingElement.title = 'Heading'

headingElement.setAttribute('class', 'heading')

console.log(headingElement.getAttribute('class'))


// InnerText, TextContent
// Getter: Lấy ra
// Setter: Đặt lại

// InnerText: chỉ lấy text bên trong
// TextContent: lấy toàn bộ mọi thứ nằm bên trong element mà mình lấy

var headingElement1 = document.querySelector('.heading')

console.log(headingElement1.innerText)
console.log(headingElement1.textContent)

headingElement1.innerText = 'New Heading'