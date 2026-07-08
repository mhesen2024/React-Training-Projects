import React from 'react'
import Options from './component/Options'

export default function Question({question, answer, dispatch, points}) {
  return (
    <div className='question'>

      <h2>{question.question} </h2>
      {points}
      <Options question={question}
                answer={answer} dispatch={dispatch} />
    </div>
  )
}
