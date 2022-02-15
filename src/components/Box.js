import React from 'react'
import rock from '../images/rock.jpg'
import paper from '../images/paper.jfif'
import scissor from '../images/scissor.jfif'

const Box = ({head, src, alt, show, score}) => {
  var val = (src)%3;
  return (
    <div className="box">
        <h2>{head}</h2>
        <div className="image"> 
            {show?<img src={val===0? rock: (val===1)?paper : scissor} alt={alt} />:''}
        </div>
        <h3>Score : {score}</h3>
    </div>
  )
}

export default Box