import React from 'react'

const Titles = ({ title, subtitle, subsubtitle }) => {
  return (
    <div className="div-titles">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{subsubtitle}</h3>
    </div>
  )
}

export default Titles