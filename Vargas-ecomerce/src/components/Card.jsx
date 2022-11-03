import React from 'react'

const Card = ({ title, description, price, img }) => {
  return (
    <div className="cards">
      <img src={img} alt="imagen" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}

export default Card