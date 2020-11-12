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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)