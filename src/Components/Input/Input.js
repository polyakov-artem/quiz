import React from 'react';
import './Input.scss';


export default function Input (props){
  const {
    htmlFor,
    value = '',
    onChange,
    type= 'text',
    label,
    isValid,
    errorMessage,
    touched
  } = props;

  return (
    <div className = 'input'>
      <label 
        className = 'input__label'
        htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className = 'input__control'
        id ={htmlFor}
        type ={type}
        value={value}
        onChange={onChange}
      />
      { !isValid && touched && <small className = 'input__message'>{errorMessage}</small>}
    </div>
  )
}


