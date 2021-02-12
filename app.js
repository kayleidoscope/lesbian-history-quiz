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
      question: 'In a 1929 study, what percent of women admitted to having had intense emotional relations with another woman?',
      answers: [
        '50.4%',
        '24.7%',
        '12.9%',
        '2.8%'
      ],
      correctAnswer: '50.4%'
    },
    {
      question: 'Which of these was a reason that a female sergeant in WWII gave for allowing lesbians in the military?',
      answers: [
        'The military needed every man and woman the country could spare',
        'Fewer pregnancies occurred with lesbians around',
        'The government would be able to reeducate them in the military',
        'They deserved equal rights'
      ],
      correctAnswer: 'Fewer pregnancies occurred with lesbians around'
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
  <div class="main-text">
    <h2>Welcome!</h2>
    <p>Are you ready to test your knowledge of queer lady history in the USA?</p>
    <button type="submit" id="js-start-button">Start Quiz</button>
    </div>`
}

function findQuestionNumber() {
//Stores the question number in a function
  return store.questionNumber;
}

function generateQuestionTemplate() {
//Sets the HTML code for all question pages in such a way that the selected radio button is usable later
  let question = findQuestionNumber();
  return `
  <h3>question ${findQuestionNumber()+1}</h3>
  <form>
    <p>${store.questions[question].question}</p>
      <div class="answers">
        <input type="radio" id="answer1" name="answers" value="${store.questions[question].answers[0]}" required />
        <label for="answer1">${store.questions[question].answers[0]}</label><br>
        <input type="radio" id="answer2" name="answers" value="${store.questions[question].answers[1]}" />
        <label for="answer2">${store.questions[question].answers[1]}</label><br>
        <input type="radio" id="answer3" name="answers" value="${store.questions[question].answers[2]}" />
        <label for="answer3">${store.questions[question].answers[2]}</label><br>
        <input type="radio" id="answer4" name="answers" value="${store.questions[question].answers[3]}" />
        <label for="answer4">${store.questions[question].answers[3]}</label><br>
        <button type="submit" class="js-submit-button" value="Submit">Submit</button>
      </div>
  </form>`
}

function correctAnswerTemplateHTML() {
  console.log("`correctAnswerTemplate` ran");
//Sets the HTML for the correctAnswer page, including the running score and button for the next question
return `
  <h3>question ${findQuestionNumber()+1}</h3>
  <div class="main-text">
  <p>You got question ${findQuestionNumber()+1} right!</p>
  <p>So far, your score is ${store.score} out of ${store.questions.length}.</p>
  <button type="submit" id="js-start-button">Next question</button>
  </div>`
}

function incorrectAnswerTemplateHTML() {
  console.log("`incorrectAnswerTemplate` ran");
//Sets the HTML for the incorectAnswer page, including the running score, button for next question,
//and whichever answer was correct
  return `
  <h3>question ${findQuestionNumber()+1}</h3>
  <div class="main-text">
  <p>I'm sorry, you got question ${findQuestionNumber()+1} wrong.</p>
  <p>The correct answer was "${store.questions[findQuestionNumber()].correctAnswer}."</p>
  <p>So far, your score is ${store.score} out of ${store.questions.length}.</p>
  <button type="submit" id="js-start-button">Next question</button>
  </div>`
}

function resultTemplateHTML() {
console.log("`resultTemplateHTML` ran");
//Sets the HTML for the final results page, with the final score, and a button to retake the quiz
  return `
  <div class="main-text">
    <p style="padding-top: 15px">You've reached the end of the quiz.</p>
    <p>You got ${store.score} questions out of ${store.questions.length} right!</p>
    <button type="submit" id="js-retake-quiz-button">Retake quiz?</button>
    <p style="padding-bottom: 15px">Want to know more? All of the information in this quiz came from "Odd Girls and Twilight Lovers: A History of Lesbian Life in Twentieth-Century America" by Lillian Faderman.</p>
  </div>`
}

function generatePrettyHeader() {
  return `
  <div class="group">
  <img src="images/holyoke.png" alt="Mount Holyoke College students embrace, circa 1880." class="item" />
    <h1 class="item2"><div>An American</div>
    <div class="middle">LESBIAN</div>
    <div>History Quiz!</div></h1>
  <img src="images/hampton-foster.png" alt="Mabel Hampton and Lillian Foster stand together, circa 1940" class="item" />
  </div>
  `
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderPrettyHeader() {
  $('.header-decor').html(generatePrettyHeader())
}

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
      renderResultTemplate();} else {
//otherwise, render a question
    renderQuestionTemplate();
      }
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

function handleSubmitButton(event) {
//when the submit button inside the main tag is clicked...
  $(document).submit('.js-submit-button', function(event) {
    event.preventDefault();
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
    store.questionNumber = 0;
    store.score = 0;
    renderStartTemplate();
  })
}

function handlePages() {
  renderPrettyHeader();
  renderStartTemplate();
  handleStartButton();
  handleSubmitButton();
  handleRetakeQuizButton();
}


$(handlePages)




//Mount Holyoke Students photo credit: Kitty Ely class of 1887 (left) and Helen Emory class of 1889, Mount Holyoke students, via vintagephoto.livejournal.com
//Mabel Hampton and Lillian Foster, circa 1940