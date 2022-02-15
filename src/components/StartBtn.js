import React from 'react'

const StartBtn = ({text, click}) => {
  return (
    <button className="btn" onClick={click}>
        {text}
    </button>
  )
}

export default StartBtn