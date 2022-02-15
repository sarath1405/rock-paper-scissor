import React from 'react'

const Select = ({rock, paper, scissor}) => {
  return (
    <div className="select">
        <button className="btn1" onClick={rock}>ROCK</button>
        <button className="btn1" onClick={paper}>PAPER</button>
        <button className="btn1" onClick={scissor}>SCISSOR</button>
    </div>
  )
}

export default Select