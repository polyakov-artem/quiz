import React from 'react';
import './Select.scss';

export default function Select (props){
  const {
    htmlFor,
    value,
    onChange,
    label
  } = props;

  return (
    <div className = 'select'>
      <label 
        className = 'select__label'
        htmlFor={htmlFor}>
        {label}
      </label>

      <select
        className = 'select__control'
        id ={htmlFor}
        value={value}
        onChange={onChange}
      >
        {props.children}
      </select>

    </div>
  )
}

