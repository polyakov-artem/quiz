import React from 'react';
import './Button.scss';

export default props => {
  const {theme, disabled, onClick, type='button', classes}= props;
  const classArr =[
    'btn',
    theme? `btn_theme_${theme}`: '',
    disabled? `btn_is_disabled`: '',
    classes
  ];

  return (
    <button
      type = {type}
      className = {classArr.join(' ')}
      onClick = {onClick} 
      disabled = {disabled}>
      {props.children}
    </button>
  )
}