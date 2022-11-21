const div = document.createElement('div')
div.className = 'firstdiv'


div.style.width = "100px"
div.style.height = "100px"
div.style.backgroundColor = "pink"

document.body.appendChild(div);


const div1 = document.createElement('div')
div1.className = 'seconddiv'

div.appendChild(div1)

const newH1 = document.createElement('div')
newH1.className = 'h1'
newH1.textContent = 'H1' 

div.appendChild(newH1)

const div3 = document.createElement('div')
div3.className = 'div3'

document.body.appendChild(div3);


const div4 = document.createElement('div')
div4.className = 'div4'

const nav = document.createElement('nav')

const ul = document.createElement('ul')
ul.className = 'ulList'



const div5 = document.createElement('div')
div5.className = 'div5'

div3.appendChild(div4)
div3.appendChild(div5)


div4.appendChild(nav)
nav.appendChild(ul)

const div6 = document.createElement('div')
div6.className = 'div6'
div6.innerHTML = 'Czech flag'

const img = document.createElement('img')
img.className = 'image'
img.setAttribute('src','https://w7.pngwing.com/pngs/72/880/png-transparent-flag-of-the-czech-republic-flag-of-the-czech-republic-desktop-flag-miscellaneous-flag-czech-republic-thumbnail.png')

function myfunc() {
 
    div5.appendChild(img)
    div5.appendChild(div6)
}

function myfunc1() {
    div5.innerHTML = 'test1'
 }

 function myfunc2() {
    div5.innerHTML = 'test2'
 }
  
ul.insertAdjacentHTML("beforeend",`
<li class='liClass' onclick='myfunc()'>1 item</li>
<li class='liClass' onclick='myfunc1()'>2 item</li>
<li class='liClass' onclick='myfunc2()'>3 item</li>`)

function myFunc4() {
    console.log('func 4')
}

const button = document.createElement('button')
button.className = 'btn.btn-dark'
button.id = 'button'
button.innerHTML = 'button'
button.onclick= myFunc4

document.body.appendChild(button)


function button1Func(e) {
       console.log(e.type)
    console.log('x' , e.clientX) // inside window

    console.log('offsetX' , e.offsetX) // inside button
    console.log('y' , e.clientY)
    console.log('alt key', e.altKey) // alt + key = true
    console.log('shift key', e.shiftKey) 
    console.log('ctrl key', e.ctrlKey) 
    console.log('type ', e.type) 
}

const button1 = document.createElement('button')
button1.className = 'btn.btn'
button1.id = 'button1'
button1.innerHTML = 'button1'
button1.addEventListener('click',button1Func)



document.body.appendChild(button1)


const div7 = document.createElement('div')
div7.className = 'div7'

document.body.appendChild(div7)
document.querySelector('.div7').style.backgroundColor = 'red'


var output = document.getElementById('button1')
output.innerHTML = `<h3> aaa </h3>`

function button1Func2(e) {

 console.log('type ', e) 
 console.log(addEventListener)
}

const button2 = document.createElement('button')
button2.className = 'btn.btn'
button2.id = 'button1'
button2.innerHTML = 'button1'
button2.addEventListener('dblclick',button1Func2) 
// mousedown,mouseup,

document.body.appendChild(button2)


const box = document.createElement('div')
const innerbox = document.createElement('div')
box.className = 'div8'
innerbox.className = 'div9'

box.style.backgroundColor= 'green'
innerbox.style.backgroundColor= 'yellow'

document.body.appendChild(box)
box.appendChild(innerbox)

const div10 = document.createElement('div')
document.body.appendChild(div10)


function runEvent(e){
    console.log('EVENT TYPE',e.type)
    div10.innerHTML = `<h3>MouseX</h3> ` + e.offsetX + `<h3>MouseY</h3>` + e.offsetY
   // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",255)"
   document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",255)"
}

// box.addEventListener('mouseover',(e)=>{console.log('EVENT TYPE',e.type)})
// box.addEventListener('mouseenter',(e)=>{console.log('EVENT TYPE',e.type)})
// mouseover-(any inner elements)

//box.addEventListener('mouseout',(e)=>runEvent(e))
//box.addEventListener('mouseleave',(e)=>runEvent(e) )
//mouseout-(any inner elements)


box.addEventListener('mousemove',(e)=>runEvent(e) )

function runFunc(){
    console.log('focus')
}

function runFunc1(){
    console.log('blur')
}

const inputTest = document.createElement('input')
inputTest.placeholder = 'your text'
document.body.appendChild(inputTest)


inputTest.addEventListener('focus', runFunc)
inputTest.addEventListener('blur', runFunc1)



// SELECT + OPTION

function selectFunction(e){
    console.log(e.target.value)
}

const inputSelect = document.createElement('select')
document.body.appendChild(inputSelect)

var option1 = document.createElement('option')
option1.text = '1'
option1.text = parseInt(option1.text)

inputSelect.add(option1)

var option2 = document.createElement('option')
option2.text = '2'
option2.text = parseInt(option2.text)

inputSelect.add(option2)

inputSelect.addEventListener('change',selectFunction)



