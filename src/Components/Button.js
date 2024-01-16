import React from 'react'

const Button = ({addCount}) => {
  return (
    <div>
      <button onClick={() => addCount()}>Clicca qui</button>
    </div>
  )
}

export default Button
