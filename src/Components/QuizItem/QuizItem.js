import React from 'react'
import './QuizItem.scss';

const QuizItem = props => {

  const renderAnswersList=()=>{
    return(
      <ul className = 'quiz-item__answers'>
        {props.answers.map((answer, index)=>{
          const stateClass = props.answerState? `quiz-item__answer_is_${props.answerState}`: '';
          const classes = `quiz-item__answer ${ props.chosenAnswerId ===  answer.id? stateClass: ''}`;

          return (
            <li
              className = {classes}
              key = {answer.id}
              answer ={answer}
              onClick = {props.chooseHandler.bind(this, answer.id)} >
                <span>{index+1}</span>
                {answer.text}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className = 'quiz-item'>
      <p className = 'quiz-item__question '>
        <span> {props.question} </span>
        <span>{props.numberOfQuestion} из {props.numOfQuestions}</span>
      </p>
      {renderAnswersList()}
    </div>
  )
}

export default QuizItem