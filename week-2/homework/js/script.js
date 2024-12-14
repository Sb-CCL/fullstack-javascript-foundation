let userAnswer;
let score = 0;

function askUser(question, correctAnswer) {
  userAnswer = prompt(question);

  if (userAnswer === "" || userAnswer === undefined) {
    alert("💫 You didn't provide an answer. Try again.");
    askUser(question, correctAnswer);
  } else if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    alert(`🔥 Correct! You answered ${userAnswer}.`);
    score++;
    alert(`Your score is ${score}`);
  } else {
    alert(`❌ Incorrect!`);
  }
}

function fullQuiz() {
  askUser("What is the capital of Georgia?", "Atlanta");
  askUser(
    "What is the only fruit that has its seeds on the outside?",
    "Strawberry"
  );
  askUser("Which planet is known as the Red Planet?", "Mars");
  askUser("What’s the tallest mountain in the world?", "Everest");
  askUser("What fruit is known to keep doctors away if eaten daily?", "Apple");
  askUser("What is the longest river in the world?", "Nile");
  askUser('Which animal is known as the "King of the Jungle"?', "Lion");

  alert(`🎉 You finished the quiz! Your final score is ${score} out of 7.`);

  const tryAgain = confirm("💪 Do you want to try again?");
  if (tryAgain) {
    fullQuiz();
  } else {
    alert("✨ Thanks for playing!");
  }
}

fullQuiz();
