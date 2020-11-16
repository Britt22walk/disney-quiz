/**
 * Example store structure
 */
const store = {
  questions: [
    {
      question: 'What is the name of the neighbor in Toy Story?',
      answers: [
        'John',
        'Tommy',
        'Sid',
        'Jeremy'
      ],
      correctAnswer: 'Sid'
    },
    {
      question: 'What does Hakuna Mata mean?',
      answers: [
        'No Worries',
        'Good Morning',
        'How are you',
        'Sorry'
      ],
      correctAnswer: 'No Worries'
    },
    {
      question:'What does Ariel call a fork?',
      answers:[
        'Boondogle',
        'Thinymajig',
        'Whateverstuff',
        'Dinglehoper'
      ],
      correctAnswer: 'Dinglehoper'
    },
    {
      question:'How many themeparks are in Walt Disney World',
      answers:[
      '2',
      '4',
      '5',
      '6'
    ],
    correctAnswer:'4'
    },
    {
      question:'What is the name of Sleeping Beauty?',
      answers:[
        'Ariel',
        'Jasmine',
        'Aurora',
        'Belle'
      ],
      correctAnswer: 'Aurora'

    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateWelcomeMessage(){
  return  `<div class='parent-div'>
  <form>
  <h2>Welcome to the Disney Quiz!</h2>
    <p>Click the button below to test your Disney knowledge</p>
    <button type="start">Start</button>
    </form>
 </div>` 
}

function generateScore(){
  //this function will track and generate the score
}

function generateQuestionNumber(){
  //this function with track and generate the question number. 
}

function generateAnswers(){
  const answersArray=STORE.questions[STORE.currentQuestion].answer
  let answersHtml ='';
  let i=0;
  answersArray.forEach(answer =>{
    answersHtml=+`<div class='item-left'>
    <ol>
      <li><input name="answers" type="radio" value="Ariel">
        <label for="Ariel">Ariel</label></li>
    </ol>
    </div>`
  })
}

function generatesQuestions(){
  let currentQuestion=store.questions[store.currentQuestion];
  return ` <form action="process-form.js" method="POST" class='item'>
  <fieldset class="parent-div">
    <legend><h2>Question 1</h2></legend>
    <label for="question" type><h2>${currentQuestion.question}</h2></label>
    <div class='item-left js-answers'>
        <ol>
          ${generateAnswers()}
        </ol>
    </div>
    <button type="submit" id="submit" class="item">Submit</button>
    <button type="reset" id="reset" class="item">Reset</button>
    <p>Score: 0</p>
  </fieldset>
</form>`
  //this function generates and displays questions
}

function resultsScreen(){
  return `<div class='parent-div'>
  <h2>Thank you for taking the Disney Quiz!</h2>
    <p>You're score is: ${STORE.score}/${STORE.questions.length}</p>
    <button type="restart">Re-Start Quiz</button>
  </div>`

}

function generateFeedbackMessage(){
  let correctAnswers = STORE.questions[STORE.currentQuestion].correctAnswer
  let html = ''
  if(answerStatus==='correct'){
    html=`<div class="center">
    <p>That's Correct!</p>
    <button type="continue">Continue</button>
    </div>`;
  } else if (answerStatus==='incorrect'){
    html=`<div class="center">
    <p>That's Incorrect. The correct answer is INSERT CORRECT ANSWER HERE</p>
    <button type="continue">Continue</button>
    </div>`;
  }
  return html; 
  //this function determines if answer is correct not. Returns correct or incorrect prompt. 
}

/********** RENDER FUNCTION(S) **********/
function renderQuiz(){
  console.log('`renderQuiz` ran')
  let html ='';
  if(store.quizStarted===false){
    $('main').html(generateWelcomeMessage());
    return;
  } else {
    generatesQuestions();
  }
}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

function handleStartClick(){
//this function with run when users click the start button
  $('button').on('click', function(event){
    console.log('Quiz Started');
    store.quizStarted=true;
    renderQuiz();
  });
  
}

function handleSubmitClick(){
  $('button').on('submit', '#submit', function(event){
  //this function will run when users click the submit button
  });
  
}

function handleContinueClick(){
  //this function will run when users click the Contiune button
  //load new questions to main element
  //render updated score
}

function restartQuiz(){

}

function handleRestartClick(){
  $('body').on('click', '#restart',)
}


//******* MAIN FUNCTION TO HANDLE QUIZ APP *********// 

function handleQuizApp(){
  renderQuiz();
  handleStartClick();
}

$(handleQuizApp);
