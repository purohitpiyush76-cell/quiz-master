import { useState } from "react";
import questions from "./data";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handleAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Quiz Master</h1>

      {showResult ? (
        <>
          <h2>Your Score: {score} / {questions.length}</h2>

          <button onClick={restartQuiz}>
            Restart Quiz
          </button>
        </>
      ) : (
        <>
          <p>
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <QuestionCard
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </>
      )}
    </div>
  );
}

export default App;