let customer = {
    name: 'Curtis Ryan'
}
//select target element on html
for (let customer of customers) {
let targetEl = document.querySelector('.customer')
//create a ul

let list = document.createElement('ul')
//append the ul to the DOM
targetEl.appendChild(list)
//console.log(list)



let listItem = document.createElement('li')
//create a li
list.appendChild(listItem)
console.log(listItem)

let imgCustomer = document.createElement('img')
imgCustomer.src = customer.picture.thumbnail
//console.log(imgCustomer)
listItem.appendChild(imgCustomer)



}


