const mainDiv = document.querySelector('.mainDiv')
const header = document.querySelector('.header')

function bigger() {
    let width = 100;
    let height = width;

    let increaseSize = () => {
        const element = document.getElementById("my-element");
        let bool = true
        if (width >= 300) {
        clearInterval(intervalId);
        return  decrease()
    }

    if (bool) {
            width += 1;
            height += 1;
            element.style.width = `${width}px`;
            element.style.height = `${height}px`;
      }

    }

    const intervalId = setInterval(increaseSize, 10);
}

function decrease(){
    const element = document.getElementById("my-element");

     bool = false
    
     let width = 300;
     let height = width;

        const decreaseSize = () => {
        if (width <= 100 ) {
          clearInterval(intervalId);
          return bigger()
  }
  width -= 1;
  height -= 1;
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
}

const intervalId = setInterval(decreaseSize, 10);

}




const newButton = document.createElement('button')
const newSpan = document.createElement('span')
newSpan.textContent = 'run'
newButton.appendChild(newSpan)
newButton.style.cursor = 'pointer'

header.appendChild(newButton)

let result = 0;


newButton.setAttribute('onclick','bigger()')
