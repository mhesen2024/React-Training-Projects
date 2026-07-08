import React from "react";

export default function FinishScreen({ points, maxPoints, highestScore ,dispatch}) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🏆";
  if (percentage < 100 && percentage >= 80) emoji = "😎";
  if (percentage < 80 && percentage >= 60) emoji = "🙂";
  if (percentage < 60 && percentage >= 40) emoji = "😐";
  if (percentage < 40) emoji = "😞";
  if (percentage === 0) emoji = "😭";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> you scored <strong>{points}</strong> out of {" "}
       {maxPoints} {" "}{Math.ceil(percentage)}%.
      </p>
      <p className="highscore">
        high Score: <strong>{highestScore} points</strong>
      </p>
        <div>
      <button className='btn btn-ui' onClick={() => dispatch({ type: "restart" })}>Restart</button>
    </div>
    </>
  );
}
