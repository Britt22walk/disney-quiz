/**
 * Example store structure
 */
const store = {
  questions: [
    {
      questionNumber: '1',
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
      questionNumber:'2',
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
      questionNumber:'3',
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
      questionNumber:'4',
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
      questionNumber:'5',
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
    <button id="start">Start</button>
    </form>
 </div>` 
}
/*
function generateQuestionNumber(){
  //this function with track and generate the question number. 
}
*/
function generatesQuestions(){
  let answers=store.questions[0].answers.map((a)=>{
    return `
      <ol>
        <div class='item-left' id="answer">
              ${a}
        </div>
      </ol>` ;
  })
  return ` <form id="question-form" class='item'>
  <fieldset class="parent-div">
    <legend><h2>Question ${store.questions[0].questionNumber}</h2></legend>
    <label for="question" type><h2>${store.questions[0].question}</h2></label>
      ${answers.join('')}
    <button id="submit" class="item">Submit</button>
    <button id="reset" class="item">Reset</button>
    <p>Score: ${store.score}</p>
  </fieldset>
</form>`
  //this function generates and displays questions
}
/*
function generateResultsScreen(){
  return `<div class='parent-div'>
  <h2>Thank you for taking the Disney Quiz!</h2>
    <p>You're score is: ${store.score}/${store.questions.length}</p>
    <button type="restart">Re-Start Quiz</button>
  </div>`

}

function generateFeedbackMessage(){
  let correctAnswers = STORE.questions[STORE.currentQuestion].correctAnswer
  let html = ''
  if(answerStatus==='correct'){
    store.score+=
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

*/

/********** RENDER FUNCTION(S) **********/
function renderQuiz(){
  console.log('Quiz Rendered')
  if(store.quizStarted===false){
    $('main').html(generateWelcomeMessage());
    return;
  } else  {
    $('main').html(generatesQuestions());
    return;
  } 
}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

function handleStartClick(){
//this function with run when users click the start button
  $('#start').on('click', function(event){
    console.log('Quiz Started');
    event.preventDefault();
    store.quizStarted=true;
    renderQuiz();
  });
}
//BELOW FUNCTIONS IN PROGRESS//

function handleSubmitClick(){
  $('#submit').on('submit', function(event){
  event.preventDefault();
  console.log('Submitt Button clicked')
  });
  
}
/*
function handleContinueClick(){
  $('body').on('click', '#continue', function(event){
    //this function will run when users click the Contiune button
  //load new questions to main element
  })
  
}

function handleRestartClick(){
  $('body').on('click', '#restart',)
  // this function will run when user click the restart button
  //zeros out score. takes back to welcome page. 
}
*/

//******* MAIN FUNCTION TO HANDLE QUIZ APP *********// 

function handleQuizApp(){
  renderQuiz();
  handleStartClick();
}

$(handleQuizApp);
