function QuestionCard({ question, onAnswer }) {
  return (
    <div>
      <h2>{question.question}</h2>

      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => onAnswer(option)}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px"
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;