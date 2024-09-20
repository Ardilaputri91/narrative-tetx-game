
const gameArea = document.getElementById('gameArea');

let currentQuestion = 0;
const questions = [
  { question: "What is the orientation in this story?", answer: "Intro" },
  { question: "What happens during the complication?", answer: "Conflict" },
  { question: "How is the resolution achieved?", answer: "Solution" }
];

function displayQuestion() {
  gameArea.innerHTML = `<p>${questions[currentQuestion].question}</p>
                        <input id="answer" type="text">
                        <button onclick="checkAnswer()">Submit</button>`;
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value;
  if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      gameArea.innerHTML = "<p>Congratulations! You've completed the game!</p>";
    }
  } else {
    alert("Incorrect, try again!");
  }
}

displayQuestion();
