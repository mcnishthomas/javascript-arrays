// 1. Create a multidimensional array to hold quiz questions and answers
let quiz = [
  ['What kind of dog is Chewy', 'cavapoo'],
  ['What city do you live in?', 'tampa'],
  ['Will the Lions win this week?', 'no']
]

// 2. Store the number of questions answered correctly
let correctAnswers = 0;
let correct = [];
let incorrect = [];

/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < quiz.length; i++) {
  let question = quiz[i][0];
  let answer = quiz[i][1];
  let response = prompt(question);

  if (answer === response) {
    correctAnswers++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

const createListItems = arr => {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `<h1>You got ${correctAnswers} answers correct!</h1>
            <h2>You got these questions right:</h2>
            <ol>${createListItems(correct)}</ol>

            <h2>You got these questions wrong:</h2>
            <ol>${createListItems(incorrect)}</ol>
`;

document.querySelector('main').innerHTML = html;
document.getElementById('#rightAnswers').innerHTML = rightAnswers;