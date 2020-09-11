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
//Sets HTML code for the welcome page, including the start button.
  return `
    <h2>Welcome!</h2>
    <p>Are you ready to test your knowledge of queer lady history in the USA?</p>
    <button type="submit" id="js-start-button">Start Quiz</button>`
}

function findQuestionNumber() {
//Stores the question number in a function
  return store.questionNumber;
}

function generateQuestionTemplate() {
//Sets the HTML code for all question pages in such a way that the selected radio button is usable later
  let question = findQuestionNumber();
  return `
  <form>
    <p>${store.questions[question].question}</p>
      <div  id="answers">
        <input type="radio" id="answer1" name="answers" value="${store.questions[question].answers[0]}" required>
        <label for="answer1">${store.questions[question].answers[0]}</label><br>
        <input type="radio" id="answer2" name="answers" value="${store.questions[question].answers[1]}" required>
        <label for="answer2">${store.questions[question].answers[1]}</label><br>
        <input type="radio" id="answer3" name="answers" value="${store.questions[question].answers[2]}" required>
        <label for="answer3">${store.questions[question].answers[2]}</label><br>
        <input type="radio" id="answer4" name="answers" value="${store.questions[question].answers[3]}" required>
        <label for="answer4">${store.questions[question].answers[3]}</label><br>
        <button type="submit" id="js-submit-button" value="Submit">Submit</button>
      </div>
  </form>`
}



function correctAnswerTemplateHTML() {
  console.log("`correctAnswerTemplate` ran");
//Sets the HTML for the correctAnswer page, including the running score and button for the next question
return `
  <p>You got it right!</p>
  <p>So far, your score is ${store.score} out of 6.</p><br>
  <button type="submit" id="js-start-button">Next question</button>`
}

function incorrectAnswerTemplateHTML() {
  console.log("`incorrectAnswerTemplate` ran");
//Sets the HTML for the incorectAnswer page, including the running score, button for next question,
//and whichever answer was correct
  return `
  <p>Sorry, you got it wrong.</p>
  <p>The correct answer was ${store.questions[findQuestionNumber()].correctAnswer}.</p>
  <p>So far, your score is ${store.score} out of 6.</p><br>
  <button type="submit" id="js-start-button">Next question</button>`
}

function resultTemplateHTML() {
console.log("`resultTemplateHTML` ran");
//Sets the HTML for the final results page, with the final score, and a button to retake the quiz
  return `
  <p>It's the end of the quiz.</p>
  <p>You got ${store.score} questions right!</p>
  <button type="submit" id="js-retake-quiz-button">Retake quiz?</button>`
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderStartTemplate() {
//puts generateStartTemplate() into the main tag so content appears on page load
  console.log("`renderStartTemplate` ran");
  $('.page-text').html(generateStartTemplate())
}

function renderQuestionTemplate() {
//puts generateQuestionTemplate() into the main tag, replacing start page or answer page
  console.log('`renderQuestionTemplate` ran')
  $(".page-text").html(generateQuestionTemplate());
}

function renderCorrectAnswerTemplate() {
//puts correctAnswerTemplateHTML() into the main tag, replacing question, if user got question right
  console.log('`renderAnswerTemplate` ran')
  $(".page-text").html(correctAnswerTemplateHTML());
  }

function renderIncorrectAnswerTemplate() {
//Puts incorrectAnswerTemplateHTML() into the main tag, replacing question, if user got question wrong
console.log('`renderAnswerTemplate` ran')
  $(".page-text").html(incorrectAnswerTemplateHTML());
}

function renderResultTemplate() {
//Puts resultTemplateHTML() into the main tag, replacing final answer page
console.log('`renderResultTemplate` ran')
  $(".page-text").html(resultTemplateHTML());
  //store.questionNumber = 0;
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartButton() {
//When the start button inside the main tag is clicked...
  $('main').on('click', '#js-start-button', function(event) {
    console.log('`handleStartButton` ran')
//if the last question has been called, render results page
    if (findQuestionNumber() === store.questions.length) {
      renderResultTemplate();}
//otherwise, render a question
    renderQuestionTemplate();
  })
}

function getAnswerSelected() {
//set the user's answer to the current question to a function
  return $('input[type=radio][name=answers]:checked').val();
  }

function getCorrectAnswer() {
//set the correct answer to the current question to a function
  let number = findQuestionNumber();
  return store.questions[number].correctAnswer
}

function evaluateAnswer(answerSelected, correctAnswer) {
//determines if user answered correctly by comparing their answer to the correct one
  if (answerSelected === correctAnswer) {
    return true;
  }
  return false;
}

function handleSubmitButton() {
//when the submit button inside the main tag is clicked...
  $('main').on('click', '#js-submit-button', function(event) {
    console.log("`handleSubmitButton` ran")
//...store the current question in a variable.
    const question = $(this).closest('form').find('p').text();
//If user was right,...
    if (evaluateAnswer(getAnswerSelected(), getCorrectAnswer(question))) {
      //...add 1 to the score...
      store.score ++
      //...send the user to the answer template...
      renderCorrectAnswerTemplate();
      //...and add 1 to the question number.      
      store.questionNumber ++
//If the user was wrong...
    } else {
      //...send them to the incorrect answer template...
      renderIncorrectAnswerTemplate();
      //...and add 1 to the question number.
      store.questionNumber ++
    }
  })
}

function handleRetakeQuizButton() {
  //When the retake quiz button is clicked on the main tag,...
  $('main').on('click', '#js-retake-quiz-button', function(event) {
    //store.questionNumber = 0;
    document.location.reload(true);
  })
}

function handlePages() {
  renderStartTemplate();
  handleStartButton();
  handleSubmitButton();
}


$(handlePages)




//Mount Holyoke Students photo credit: Kitty Ely class of 1887 (left) and Helen Emory class of 1889, Mount Holyoke students, via vintagephoto.livejournal.com
//Mabel Hampton and Lillian Foster, circa 1940