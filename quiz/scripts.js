let obj

fetch('questions.json')
    .then(response => response.json())
    .then(data => { const result = data.questions; obj=result })


const question= document.querySelector('.question')
const answers = document.querySelector('.answers')
const startBtn = document.querySelector('.startBtn')

var x = 0;

let correctAnswers = 0

function myFunc() {
    startBtn.style = 'display:none'

    const playDiv = document.createElement('div')
    playDiv.className = 'playDiv'
    answers.appendChild(playDiv)

    const questionDiv = document.createElement('div')
    questionDiv.className = 'questionDiv'

if (x < obj.length) {
   
    
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
        let chosenAnswer = e.target.outerText
        
        if (chosenAnswer == obj[x].corr){
            let correctAnswerBox =  document.querySelector(`.box${i+1}`)    
            correctAnswerBox.style = 'background:#c4e795';
            }
        else {  
           let incorrectAnswerBox =  document.querySelector(`.box${i+1}`)    
            incorrectAnswerBox.style = 'background:#f08080'
            let correctAnswer = obj[x].corr
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
    console.log('end')
}


}

