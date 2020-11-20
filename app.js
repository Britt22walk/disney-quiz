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
    <button id="start">Start</button>
    </form>
 </div>` 
}

function generatesQuestions(questionNumber){ 
//this function generates and displays questions and answers 
  let answers=store.questions[store.questionNumber].answers.map((a)=>{
    return `
      <ul>
        <div class='item-left' id="answer">
          <li><input value="${a}" name="answers" type="radio">
                <label>${a}</label></li>
        </div>
      </ul>` ;
  })
  return ` <form id="question-form" class='item'>
  <fieldset class="parent-div">
    <legend><h2>Question ${store.questionNumber +1}(out of ${store.questions.length})</h2></legend>
    <label for="question" type><h2>${store.questions[store.questionNumber].question}</h2></label>
      ${answers.join('')}
    <button id="submit" class="item">Submit</button>
    <p>Score: ${store.score}</p>
  </fieldset>
</form>`
}


function generateResultsScreen(){
  return `<div class='parent-div'>
  <h2>Thank you for taking the Disney Quiz!</h2>
    <p>You're score is: ${store.score}/${store.questions.length}</p>
    <button type="button" id="restart">Re-Start Quiz</button>
  </div>`

}




function checkAnswer(){
  let userAnswer = $('input[name=answers]:checked').val();
  let correctAnswer= store.questions[store.questionNumber].correctAnswer
  if(userAnswer===correctAnswer){ //if user input is correct
    store.score++ //increase score count in store and return correct message 
    return `<div class="parent-div"> 
    <p>That's Correct!</p>
    <button type="button" id="continue">Continue</button>
    </div>`;
  } else { // return incorrect message with correct answer 
    return `<div class="parent-div">
    <p>That's Incorrect. The correct answer is ${correctAnswer}</p>
    <button type="button" id="continue">Continue</button>
    </div>`;
  }
}

/********** RENDER FUNCTION(S) **********/
function renderQuiz(){
  console.log('Quiz Rendered')
  if(store.quizStarted===false){
    $('main').html(generateWelcomeMessage());
    return;
  } else if(store.quizStarted===true&&store.questionNumber<store.questions.length) {
    $('main').html(generatesQuestions());
    return;
  }  else { 
    $('main').html(generateResultsScreen())
    return;
  }
}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

function handleStartClick(){
//this function with run when users click the start button
  $('body').on('click', '#start', function(event){
    console.log('Quiz Started');
    event.preventDefault();
    store.quizStarted=true;
    renderQuiz();
  });
}

function handleSubmitClick(){
  $('body').on('submit','#question-form', function(event){ //on submit button click 
  event.preventDefault();
  console.log('Submitt Button clicked');
  $('main').html(checkAnswer()); //run the checkAnswer function 
  });
}

function handleContinueClick(){
  $('#continue').on('click', function(event){
    //this function will run when the continue button is clicked. 
    event.preventDefault();
    store.questionNumber++; //increase questionNumber in store 
    renderQuiz(); //loads next question or results screen 
    
  })
}

function handleRestartClick(){
  $('body').on('click', '#restart',function(){
  event.preventDefault();
  store.questionNumber=0;
  store.quizStarted=false;
  store.score=0;
  renderQuiz(); 
  })
}


//******* MAIN FUNCTION TO HANDLE QUIZ APP *********// 

function handleQuizApp(){
  renderQuiz();
  handleStartClick();
  handleSubmitClick();
  handleContinueClick();
  handleRestartClick();
}

$(handleQuizApp);
