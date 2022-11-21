var itemList = document.querySelector('#list');
console.log(itemList.parentNode);
console.log(itemList.children);

itemList.children[1].style.backgroundColor = 'yellow'



var newDiv = document.createElement('div')

newDiv.className = 'helloCLASS '
newDiv.id = 'helloID'
newDiv.setAttribute('title','Hello Div' )

console.log(newDiv)



var newInput = document.createElement('input')

function setAttributes(el,attrs) {
    for(var key in attrs) {
        el.setAttribute(key,attrs[key])
    }
}

setAttributes(newInput, {"placeholder":"..input here" , "value":"Ales"})

console.log(newInput)



const people = [
    {name:'Ales',
     age:43 },
     {name:'Adam',
     age:25 },
     {name:'Adela',
     age:19 },
     {name:'Pepa',
     age:50 },
]



    


const newUlDiv = document.createElement('div')
newUlDiv.className = 'ulDiv'
document.body.appendChild(newUlDiv)

const newH1 = document.createElement('h1')
newH1.textContent = 'this is a text'
newUlDiv.appendChild(newH1)

const newUL = document.createElement('ul')
newUL.id = 'list2'
newUlDiv.appendChild(newUL)

const list = document.getElementById('list2')

people.map(i=>{
     list.innerHTML += `<li>name: ${i.name}, age: ${i.age}</li>`
})

     
const button = document.createElement('button')
button.className('btn-btn-dark')
button.value = 'button'

document.body.appendChild(button)