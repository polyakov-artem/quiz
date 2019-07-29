import React from 'react'
import './QuizPage.scss';

import Quiz from '../../Container/Quiz/Quiz'

function QuizPage() {
  return (
    <div className = 'quiz-page'>
      <h1 className ='quiz-page__header'>Тест</h1>
      <Quiz />
    </div>
  )
}

export default QuizPage