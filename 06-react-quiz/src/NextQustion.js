import React from 'react'

export default function NextQustion({ answer, dispatch ,index, numberOfQuestions}) {
    if (answer === null) return null;

if(index === numberOfQuestions - 1 && answer !== null) {
  return (
    <button className='btn btn-ui' onClick={() => dispatch({ type: "finish" })}>Finish</button>
  );
}

  return (
    <div>
      <button className='btn btn-ui' onClick={() => dispatch({ type: "nextQuestion" })}>Next Question</button>
    </div>
  )

 
}
