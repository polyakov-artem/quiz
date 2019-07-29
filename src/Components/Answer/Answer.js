import React from 'react'
import styles from './Answer.css';

const Answer = props => {

  const clickHandler = (event) => {
    props.chooseHandler(props.answer.id);
  }

  let stateClass;
  if ( props.isCorrect ) stateClass = styles['Answer_'+ props.isCorrect];

  return(
    <li className={stateClass + ' ' + styles.Answer} onClick = { clickHandler } > 
      {props.index+1}. {props.answer.text} 
    </li>
  )
}

export default Answer