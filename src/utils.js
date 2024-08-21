import React from 'react'

const Input = (props) => {
  return <input placeholder={props.placeholder} onChange={props.onChange} className={props.className} />
}

const Button = (props) => {
  return <button onClick={props.onClick} className={props.className}>{props.text}</button>
}

export {Input , Button }
