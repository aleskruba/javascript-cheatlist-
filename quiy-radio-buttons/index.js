fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    const questions = data.questions;

    // Create the quiz form
    const form = document.querySelector('form');
    const questionsDiv = document.querySelector('#questions');
    questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.innerHTML = `
        <p id='pClass${question.id}'>${index + 1}. <code>${question.question}</code></p>
        <p><code>${question.example != undefined ? question.example : '' }</code></p>
        <p id='correctAnswer${question.id}' style="display:none" >correct answer is <code>${question.answer}</code></p>
        ${question.options.map(option => `
          <label>
            <input type="radio" name="question${index}" value="${option}">
            ${option}
          </label>
          `).join('')
        
    }
     
        <hr>
      `;
      questionsDiv.appendChild(questionDiv);
    });

    // Handle the submit button
    form.addEventListener('submit', event => {
      event.preventDefault();
      let score = 0;
      questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.answer) {
          score++;
        }else if(selectedOption && selectedOption.value != question.answer){
            console.log(question.answer)
            const x = document.querySelector(`#pClass${question.id}`)
            const y = document.querySelector(`#correctAnswer${question.id}`)
            x.style = 'color:red'
            y.style = 'display:block;color:red;'
        }

      });
      document.querySelector('#score').textContent = `Score: ${score} out of ${questions.length}`;
    });
  });
