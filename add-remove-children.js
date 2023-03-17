

function Myfunc() {
    const btn3 = document.createElement('button')
    btn3.setAttribute('class','button3')
    const span3 = document.createElement('span')
    span3.innerText = 'click here'
 
    btn3.appendChild(span3)
    newDiv.appendChild(btn3)
}


function Myfunc2() {
   const list = document.getElementById("newDivClass");
      if (list.hasChildNodes()) {
        list.removeChild(list.children[0]);
      }
}

function Myfunc3() {
  const list = document.getElementById("newDivClass");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
}

const appDiv = document.querySelector('#app')
const btn1 = document.createElement('button')
btn1.setAttribute('class','button1')
btn1.addEventListener('click',Myfunc)
const span1 = document.createElement('span')
span1.innerText = 'add'
btn1.appendChild(span1)

const btn2 = document.createElement('button')
btn2.setAttribute('class','button2')
btn2.addEventListener('click',Myfunc2)
const span2 = document.createElement('span')
span2.innerText = 'remove'
btn2.appendChild(span2)

const btn12 = document.createElement('button')
btn12.setAttribute('class','button2')
btn12.addEventListener('click',Myfunc3)
const span12 = document.createElement('span')
span12.innerText = 'remove all'
btn12.appendChild(span12)



appDiv.textContent = 'Hello to show another button '
appDiv.append(btn1)
appDiv.append(btn2)
appDiv.append(btn12)

const newDiv = document.createElement('div')
newDiv.setAttribute('id','newDivClass')
appDiv.appendChild(newDiv)

