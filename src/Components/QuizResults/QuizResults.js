import React from 'react';
import './QuizResults.scss';
import Button from '../Button/Button';

export default function QuizResults (props){

  const numOfCorrect = props.answersArray.reduce( (total, currentItem)=>{
    return total + ( currentItem === 'correct'? 1: 0 )
  }, 0 );

  const renderAnswersList = () => (
    <ul>
      {props.answersArray.map( (item, index) => {
        const iconClasses = item === 'correct'
          ? 'fas fa-check-circle icon-success quiz-results__icon-success'
          : 'far fa-times-circle icon-fail quiz-results__icon-fail';
        return (
          <li className='quiz-results__question' key = {index}>
            <span>{index +1}. </span> 
            {props.quiz[index].question}
            <i className={iconClasses}></i>
          </li>
        )}
      )}
    </ul>
  )

  return (
    <div className = 'quiz-results' >
      <h2 className = 'quiz-results__title'>Ваши ответы</h2>
      {renderAnswersList()}
      <p>Правильных ответов: {numOfCorrect} из {props.quiz.length}</p>
      <div className='quiz-results__buttons'>
        <Button
          onClick={props.navigateToList}
          theme='success'
          classes='quiz-results__btn'>
          Перейти в список тестов
        </Button>
        <Button
          onClick={props.retryHandler}
          theme='success'
          classes='quiz-results__btn'>
          Повторить
        </Button>
      </div>
    </div>
  )
}