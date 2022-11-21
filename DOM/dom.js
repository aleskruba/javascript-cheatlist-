console.log(document.URL)
console.log(document.querySelector('.title'))

const newText = document.querySelector('.title')

newText.textContent = ' new Text'


const container = document.querySelector('.container')
console.log(container)
container.innerHTML = '<h1>new Title IIIIIIIII</h1>'


container.style.border = '1px solid black'

var items = document.getElementsByClassName('e')
console.log(items[0].outerText)


items[2].textContent = "new Li"
items[2].style.fontWeight = 'bold'

for( var i = 0; i < items.length; i++ )  {
items[i].style.backgroundColor = 'gray'
}


const function1 = () => {
    const ul = document.querySelector('#list')
    const li = document.createElement('li')
    li.id = 'next id';
    li.className  = 'next class name'
    li.appendChild(document.createTextNode('nexT LI'))
    ul.appendChild(li)
}

let toggle = false
console.log(toggle)

const function2 = () => {
    toggle = !toggle
    console.log(toggle)
    document.querySelector('.test').innerHTML = "";
    if (toggle)
        { const testDiv = document.querySelector('.test')    
        const newDiv = document.createElement('div') 
        newDiv.className = 'newDivClassname'
        testDiv.appendChild(newDiv)
            }
    else { const testDiv = document.querySelector('.test')    
            const newDiv = document.createElement('div') 
            newDiv.className = 'newDivClassname1'
            testDiv.appendChild(newDiv)
        }

      
}

console.log(document.images)
console.log(document.forms)
console.log(document.querySelector('.test'))


const input = document.querySelector('input')
input.value = 'Hi Ales'

const submit = document.querySelector('input[type="submit"]')
submit.style.backgroundColor = 'green'
submit.value = "SEND IT"

const item = document.querySelector('.e')
item.style.color = 'red'

const lastItem = document.querySelector('.e:last-child')
lastItem.style.color = 'blue'

const secondItem = document.querySelector('.e:nth-child(2)')
secondItem.style.color = 'green'

var titles = document.querySelectorAll('.name')
console.log(titles[1].textContent)