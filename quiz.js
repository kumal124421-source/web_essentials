// Array of quiz questions (each item is an object)
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "What is the largest planet in our solar system?", answer: "jupiter" },
    { question: "Who is known as the father of computers?", answer: "charles babbage" },
    { question: "Which programming language is used for web styling?", answer: "css" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" }
];

// Function to run the quiz
function runQuiz() {

    let score = 0;  // score initialization

    for (let i = 0; i < quizQuestions.length; i++) {

        let userInput = prompt(quizQuestions[i].question);

        // If user cancels prompt
        if (userInput === null) {
            alert("You exited the quiz.");
            return;
        }

        // Normalize the input
        userInput = userInput.toLowerCase().trim();

        // Check answer
        if (userInput === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Wrong ❌ The correct answer is: " + quizQuestions[i].answer);
        }
    }

    // Final score
    alert("Quiz Completed!\nYour Score: " + score + " / " + quizQuestions.length);
}

// Run the quiz
runQuiz();
