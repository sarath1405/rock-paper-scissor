import React from 'react'

const Navlink = ({link, text}) => {
  return (
    <a className="navlink" href={link}>{text}</a>
  )
}

export default Navlink