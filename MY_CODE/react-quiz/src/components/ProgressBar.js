function ProgressBar({ index, numQuestions, points, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={answer === null ? index : index + 1}
      ></progress>
      <p>
        Question {index + 1}/{numQuestions}
      </p>
      <p>points {points}</p>
    </header>
  );
}

export default ProgressBar;
