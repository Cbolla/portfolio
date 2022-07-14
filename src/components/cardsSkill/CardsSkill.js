import React from 'react'
import "./index.css"
export const CardsSkill = (props) => {
  return (
    <div className="card-skill">
        <img src={props.img} alt={props.alt} />
            <p>{props.text}</p>
    </div>
  )
}