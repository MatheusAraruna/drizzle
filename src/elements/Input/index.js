import React from 'react';
import'./index.scss'

function Input(...rest) {
  return <input type="text" {...rest}/>
}

export default Input;