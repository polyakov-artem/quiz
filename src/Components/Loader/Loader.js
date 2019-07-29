import React from 'react'
import './Loader.css'

export default function Loader(props){
  const classes =['loader', props.classes && `${props.classes}__loader`].join(' ');
  return(
    <div className={classes} /> 
  )
}