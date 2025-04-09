import React from "react";

const FinishScreen = ({ points, maxPossiblePoints ,highsscore , dispatch}) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🎉";
  } else if (percentage >= 80) {
    emoji = "😃";
  } else if (percentage >= 50) {
    emoji = "😐";
  } else {
    emoji = "😢";
  }

  return (

    <>
    <p className="result">
      <span>{emoji}</span> you Scored <strong>{points}</strong> out of{" "}
      {maxPossiblePoints}({Math.ceil(percentage)}%)
    </p>

    <p className="highscore">
        (highscore : {highsscore} points)
    </p>

    <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>

    </>
  );
};

export default FinishScreen;
