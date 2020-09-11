/**
 * Example store structure
 */


const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which of the following was NOT a late 1800s term for so-called romantic friendship between women?',
      answers: [
        'smashes',
        'crushes',
        'spoons',
        'squeezes'
      ],
      correctAnswer: 'squeezes'
    },
    {
      question: '`The Well of Loneliness` is a novel about the love between an upper-class woman named Stephen Gordon and Mary Llewellyn, an ambulance driver. What year was it published?',
      answers: [
        '1928',
        '1899',
        '1953',
        '1970'
      ],
      correctAnswer: '1928'
    },
    {
      question: 'What percent of women in 1929 admitted to having had intense emotional relations with other women?',
      answers: [
        '50.4%',
        '24.7%',
        '12.9%',
        '2.8%'
      ],
      correctAnswer: '50.4%'
    },
    {
      question: 'Which word in the 1930s referred to a woman who strayed into lesbianism as second-best but stayed because she found she preferred it to heterosexuality?',
      answers: [
        'twist',
        'loop',
        'spook',
        'canary'
      ],
      correctAnswer: 'spook'
    },
    {
      question: 'Which of these was a reason that a female sergeant in WWII gave for allowing lesbians in the military?',
      answers: [
        'The military needed every man and woman the country could spare.',
        'Fewer pregnancies occurred with lesbians around.',
        'The government would be able to reeducate them in the military.',
        'They deserved equal rights.'
      ],
      correctAnswer: 'Fewer pregnancies occurred with lesbians around.'
    },
    {
      question: 'What 1950s term described a lesbian who was neither a butch nor a femme?',
      answers: [
        'razz',
        'newt',
        'Nora',
        'kiki'
      ],
      correctAnswer: 'kiki'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

let numbers = [0, 1, 2, 3, 4, 5, 6]

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

function generateStartTemplate() {
//Includes intro text
//Includes functional "Start" button
  return `
    <h2>Welcome!</h2>
    <p>Are you ready to test your knowledge of queer lady history in the USA?</p>
    <button type="submit" id="js-start-button">Start Quiz</button>`
}

function chooseQuestionNumber() {
  let min = 0;
  let max = numbers.length - 1;
  let questionNumber = Math.floor(Math.random() * max);
  numbers.splice(questionNumber);
  return questionNumber;
}

function generateQuestionTemplate() {
//Includes question
//Includes 4 answer options as part of a form
//Includes functional "Submit answer" button
//May include a photo per question
  let question = chooseQuestionNumber();
  return `
  <form>
    <p>${store.questions[question].question}</p>
      <div  id="answers">
        <input type="radio" id="answer1" name="answers" value=${store.questions[question].answers[0]} required>
        <label for="answer1">${store.questions[question].answers[0]}</label><br>
        <input type="radio" id="answer2" name="answers" value=${store.questions[question].answers[1]} required>
        <label for="answer2">${store.questions[question].answers[1]}</label><br>
        <input type="radio" id="answer3" name="answers" value=${store.questions[question].answers[2]} required>
        <label for="answer3">${store.questions[question].answers[2]}</label><br>
        <input type="radio" id="answer4" name="answers" value=${store.questions[question].answers[3]} required>
        <label for="answer4">${store.questions[question].answers[3]}</label><br>
        <button type="submit" id="js-submit-button" value="Submit">Submit</button>
      </div>
  </form>`
}

function evaluateAnswer(correctAnswer) {
  if (event.target === correctAnswer) {
    return true
  }
  return false
}

function answerRightTemplateHTML() {
//Includes text telling user they got the answer right
//Includes running total score
//If photo is included in question template, the same photo per question will appear here
return `
  <p>You got it right!</p>`
}

function answerWrongTemplateHTML() {
  //Includes text telling user they got the answer wrong
  //Includes running total score
  //Includes text with the right answer
  //If photo is included in question template, the same photo per question will appear here
  return `
  <p>You got it wrong.</p>`
}

function resultTemplateHTML() {
//Includes text telling user how many questions they got right
//Includes functional "Retake quiz" button
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderStartTemplate() {
  console.log("`renderStartTemplate` ran");
  $('.page-text').html(generateStartTemplate())
}

function renderQuestionTemplate() {
//This will happen after user clicks "Start" button
//Will use event handler that looks for when the button is clicked
  console.log('`renderQuestionTemplate` ran')
  $(".page-text").html(generateQuestionTemplate());
}

function renderAnswerTemplate() {
//This will happen after user has submitted an answer
//Will use event handler that looks for when the button is clicked
//Will need 'if' statement to determine needed template
  console.log('`renderAnswerTemplate` ran')
  $(".page-text").html(answerRightTemplateHTML());
}

function renderResultTemplate() {
//This will happen after user has submitted the final answer
//Will use event handler that knows when the final question has been submitted
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleScore() {
//Will return running score
}

function handleStartButton() {
  $('main').on('click', '#js-start-button', function(event) {
    console.log('`handleStartButton` ran')
    renderQuestionTemplate();
  })
}

function getAnswerSelected() {
  return $('input[type=radio][name=answers]:checked').val();
}

function handleSubmitButton() {
  $('main').on('click', '#js-submit-button', function(event) {
    console.log("`handleSubmitButton` ran")
    getAnswerSelected();
    console.log(getAnswerSelected())
    renderAnswerTemplate();
  })
}

function handleRetakeQuizButton() {
}

function handlePages() {
  renderStartTemplate();
  handleStartButton();
  handleSubmitButton();
}


$(handlePages)




//Mount Holyoke Students photo credit: Kitty Ely class of 1887 (left) and Helen Emory class of 1889, Mount Holyoke students, via vintagephoto.livejournal.com
//Mabel Hampton and Lillian Foster, circa 1940