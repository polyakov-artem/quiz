import React from 'react'

import './ToggleBtn.scss';


export default props => {
  let {menuIsOpen, toggleMenu} = props;

  const classArr =[ 'fa', 'toggle-btn' ]

  menuIsOpen
    ? classArr.push('fa-times', 'toggle-btn_is_active')
    : classArr.push('fa-bars');

  return (
    <button
      type='button'
      className = {classArr.join(' ')}
      onClick = {toggleMenu} 
    />
  ) 
}