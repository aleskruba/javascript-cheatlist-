let obj

fetch('questions.json')
    .then(response => response.json())
    .then(data => { const datas = data.questions; obj=datas })

  



const question= document.querySelector('.question')
const answers = document.querySelector('.answers')
const startBtn = document.querySelector('.startBtn')

var x = 0;
let correctAnswers = 0

let points = 0
let wrongAnswers = []



function myFunc() {



startBtn.style = 'display:none'





    const playDiv = document.createElement('div')
    playDiv.className = 'playDiv'
    answers.appendChild(playDiv)

    const questionDiv = document.createElement('div')
    questionDiv.className = 'questionDiv'

if (x < obj.length) {
    let count = 30
    const timer = document.querySelector('.timer')
    const H1Timer = document.createElement('h1')
    timer.style = "display:flex"
    timer.textContent = count


  
    const countdownInterval = setInterval(() => {
        count--;
        timer.textContent = count;
        if (count === 25)
             {
                const clickDisable1  = document.querySelector('.box1');
                const clickDisable2  = document.querySelector('.box2');
                const clickDisable3  = document.querySelector('.box3');
                const clickDisable4  = document.querySelector('.box4');
                clickDisable1.style = 'pointer-events: none;'
                clickDisable2.style = 'pointer-events: none;'
                clickDisable3.style = 'pointer-events: none;'
                clickDisable4.style = 'pointer-events: none;'
                   
          clearInterval(countdownInterval);
          count = 30;
          timer.textContent = count;


          let correctAnswer = obj[x].corr
          wrongAnswers.push(obj[x])      

          obj[x].arr.forEach((i,index)=>{
              if (i == correctAnswer){
          let CorrectedAnswerBox =  document.querySelector(`.box${index+1}`)    
              CorrectedAnswerBox.style ='background-color:#c4e795; \
                                          color:black; \
                                          animation: blinker 1s linear infinite;'
                                          
          
              }
          })
          setTimeout(()=> {
              const H1element = document.querySelector(".h1Text");
              H1element.remove();
      
              const element = document.querySelector(".playDiv");
              element.remove();
      
              questionH1
              x=x+1
              myFunc()
             
          },1000)        

        }
      }, 1000);
    
    const questionH1 = document.createElement('h1') 
    questionH1.className = 'h1Text'
    questionH1.innerHTML = obj[x].q
    questionDiv.appendChild(questionH1)
    question.appendChild(questionDiv)



    for (let i=0; i<obj[x].arr.length; i++ ) {

  

    let box = document.createElement('div')    
  
   
         playDiv.appendChild(box)
         box.className = `box${i+1}`

        let answer = document.createElement('code')
        answer.innerHTML= obj[x].arr[i]
        box.append(answer)


    box.addEventListener('click', (e) => {  


      
        const clickDisable1  = document.querySelector('.box1');
        const clickDisable2  = document.querySelector('.box2');
        const clickDisable3  = document.querySelector('.box3');
        const clickDisable4  = document.querySelector('.box4');
        clickDisable1.style = 'pointer-events: none;'
        clickDisable2.style = 'pointer-events: none;'
        clickDisable3.style = 'pointer-events: none;'
        clickDisable4.style = 'pointer-events: none;'
        clearInterval(countdownInterval);

        let chosenAnswer = e.target.outerText
       
        
        
        if (chosenAnswer == obj[x].corr){
            points = points + 1
            let correctAnswerBox =  document.querySelector(`.box${i+1}`)   
          
            correctAnswerBox.style = 'background:#c4e795';
             
  
        }    
         else {  
        

              
           let incorrectAnswerBox =  document.querySelector(`.box${i+1}`)    
            incorrectAnswerBox.style = 'background:#f08080'
            let correctAnswer = obj[x].corr
            wrongAnswers.push(obj[x])      

            obj[x].arr.forEach((i,index)=>{
                if (i == correctAnswer){
            let CorrectedAnswerBox =  document.querySelector(`.box${index+1}`)    
                CorrectedAnswerBox.style ='background-color:#c4e795; \
                                            color:black; \
                                            animation: blinker 1s linear infinite;'
                                            }
            })
        
            }
       
        
        setTimeout(()=> {
            clearInterval(countdownInterval);
        const H1element = document.querySelector(".h1Text");
        H1element.remove();

        const element = document.querySelector(".playDiv");
        element.remove();

        questionH1
        x=x+1
        myFunc()
       
    },1000)

    })



}




}else {
    const timer = document.querySelector('.timer')
    timer.style = 'display:none'


    const endDiv = document.createElement('div')
    endDiv.className = 'endDiv'
    const lastText = document.querySelector('.lastText'
    )
    lastText.style = 'display:block'
    playDiv.appendChild(endDiv)
    console.log(wrongAnswers)
    wrongAnswers.forEach(i=>{

        const correctedQuestion = document.createElement('div')
        correctedQuestion.className = 'correctedQuestion'        
        correctedQuestion.innerHTML = `${i.q} <br>  ${i.corr} <hr> <br>`
        endDiv.appendChild(correctedQuestion)

      
      
    })

    const rightDiv = document.querySelector('.rightDiv')
    const point = document.createElement('div')
    point.classList = 'points'
    point.innerHTML = `${points} answers correct out of ${obj.length}`    
    rightDiv.appendChild(point)  
}


}




}else {


    const endDiv = document.createElement('div')
    endDiv.className = 'endDiv'
    const lastText = document.querySelector('.lastText'
    )
    lastText.style = 'display:block'
    playDiv.appendChild(endDiv)
    console.log(wrongAnswers)
    wrongAnswers.forEach(i=>{

        const correctedQuestion = document.createElement('div')
        correctedQuestion.className = 'correctedQuestion'        
        correctedQuestion.innerHTML = `${i.q} <br>  ${i.corr} <hr> <br>`
        endDiv.appendChild(correctedQuestion)

      
      
    })

    const rightDiv = document.querySelector('.rightDiv')
    const point = document.createElement('div')
    point.classList = 'points'
    point.innerHTML = `${points} answers correct out of ${obj.length}`    
    rightDiv.appendChild(point)  
}


}



