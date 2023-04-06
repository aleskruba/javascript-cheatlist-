
let isTrue = true

function showAlert(message,className){
    isTrue=false
    document.querySelector('#submit-btn').disabled = true
    const div = document.createElement("div")
    div.className = `alert alert-${className}`;

   
    div.appendChild(document.createTextNode(message))
    div.style = "position:absolute;margin-top:45px;width:55%;font-size:8"

    
    const hideMainPage = document.querySelector(".hideMainPage")
    const main = document.querySelector(".main")
    
    hideMainPage.insertBefore(div,main);

    setTimeout(()=>{document.querySelector(".alert").remove();
                    document.querySelector('#submit-btn').disabled = false;
                    isTrue=true
                }
    ,1500);
    
}

const date1 = new Date().setDate(new Date().getDate() )
       
const hideMainPage = document.querySelector('.hideMainPage')
const mainID = document.getElementById('mainID')


const name = document.getElementById("name");

name.addEventListener("keydown", function(event) {
    // Get the value of the input
    const value = this.value;
  
   
  
    const isBackspaceOrDelete = ['Backspace', 'Delete'].includes(event.code);
  

  
    // If the input already has 2 digits and the key pressed is not a backspace/delete, prevent the default action
    if (value.length >= 25 && !isBackspaceOrDelete) {
        if (isTrue){
        showAlert('fuck','danger')
    }
      event.preventDefault();
    }
  });


const age = document.getElementById("age");


age.addEventListener("keydown", function(event) {
  // Get the value of the input
  const value = this.value;

  // Check if the key pressed is a digit (0-9) or a backspace/delete key
  const isDigit = /\d/.test(event.key);

  const isBackspaceOrDelete = ['Backspace', 'Delete'].includes(event.code);

  // If the key pressed is not a digit or backspace/delete, prevent the default action
  if (!isDigit && !isBackspaceOrDelete) {
    event.preventDefault();
    return;
  }

  // If the input already has 2 digits and the key pressed is not a backspace/delete, prevent the default action
  if (value.length >= 2 && !isBackspaceOrDelete) {
    event.preventDefault();
  }
});



let newObj = {
        name: '',
        age: Number,
        expire:date1
    };

    
let myObj_deserialzied = JSON.parse(localStorage.getItem("name"))
   
if (myObj_deserialzied){
    const res = new Date().getTime() > myObj_deserialzied.expire;
    if (!res) {
        localStorage.removeItem("name");
        console.log('expired')
    }else{
        console.log('it still valid')
    }
}else{
    console.log('no items')
}



    const user = document.getElementById('spanID')
  

    if(myObj_deserialzied?.name) {
       // user.innerHTML = myObj_deserialzied.name
       hideMainPage.style ="display: none;"
        mainID.style = "display: block"
    }else if(!myObj_deserialzied?.name) {
      hideMainPage.style ="display: block;"
         mainID.style = "display: none"
         //user.innerHTML = 'newuser'
    }


    document.querySelector('#formID').addEventListener('submit', e=>  {
    e.preventDefault()
   const name = document.querySelector('#name')
   const age = document.querySelector('#age')
              
     newObj.name = name.value,
     newObj.age = parseInt(age.value)
     
   

     console.log(typeof(newObj.age))

   if (newObj.name == '' || newObj.age == '') {
    showAlert("please fill in all fields","danger")
   }
    else if ( newObj.age < 4){
        showAlert(`Real age please amigo 😀`,"danger")
   }


   else {
   //user.innerHTML = newObj.name 
   localStorage.setItem('name',JSON.stringify(newObj))
   hideMainPage.style ="display: none;"
   mainID.style = "display: block"
    }
    })

    function logoutfunc(){
    
        const name = document.querySelector('#name')
        const age = document.querySelector('#age')
        
        name.value = ''
        age.value = ''

        localStorage.removeItem("name");
        hideMainPage.style ="display: block;"
         mainID.style = "display: none"
         window.location.reload();
        // user.innerHTML = 'newuser'
      
    }
    
    
    fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    const questions = data.questions;

    // Create the quiz form
    const questionsDiv = document.querySelector('#questions');
    questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.innerHTML = `
        <p class="QuestionsNumbers" id='pClass${question.id}'>${index + 1}. <code class="codeQ">${question.question}</code></p>
        <p ><code class="example">${question.example != undefined ? question.example : '' }</code></p>
        <div class="correctAnswerDiv">
        <p  id='correctAnswer${question.id}' style="display:none" >correct answer is <code class="correctAnswer">${question.answer}</code></p>
        </div>
        <div class="options">

        ${question.options.map(option => `

            <div class="option">
            <input type="radio" name="question${index}" value="${option}" >
             <code class="code">  ${option}</code>
            
            </div>
       
          `).join('')
        
    }
    </div>
        <hr style="color:white">
      `;
      questionsDiv.appendChild(questionDiv);
    });

    const SubmitButton = document.querySelector('#submitButton')
    // Handle the submit button
    const form = document.querySelector('#formClass');
    let isTrueSubmitButton = true
  

    form.addEventListener('submit', event => {
         event.preventDefault();
     

       isTrueSubmitButton = false
       if (!isTrueSubmitButton) { SubmitButton.style = "display:none"}
       
           
       let score = 0;
      questions.forEach((question, index) => {
      
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        
        
        if (selectedOption && selectedOption.value === question.answer) {
          score++;
   
   
        }

        
        else if(selectedOption && selectedOption.value != question.answer || selectedOption==null){
            console.log(question.answer)
            const x = document.querySelector(`#pClass${question.id}`)
            const y = document.querySelector(`#correctAnswer${question.id}`)
            x.style = 'color:white'
            y.style = 'display:block;color:white'
        }
   

      });
   
      document.querySelector('#score').innerHTML = `Score: ${score} out of ${questions.length};`
      window.scrollTo(0,document.body.scrollHeight);
    });
    
  });
