import React from 'react'
import "./error.css"

const ErrorMessage = ({message}) => {
  return (
    <div className='errorMessage'>{message}</div>
  )
}

export default ErrorMessage