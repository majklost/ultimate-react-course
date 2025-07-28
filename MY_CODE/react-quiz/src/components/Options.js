function Options({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button
          className={`btn btn-option ${idx === answer ? "answer" : ""} ${
            answer != null &&
            (idx === question.correctOption ? "correct" : "wrong")
          }`}
          key={option}
          disabled={answer != null}
          onClick={() => dispatch({ type: "newAnswer", payload: idx })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
