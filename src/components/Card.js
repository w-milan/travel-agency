import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div>
        <img src={props.item.imageUrl} alt="" />
        <p>{props.item.location}</p>
        <a href={props.item.googleMapsUrl}>Visit on Google Maps</a>
      </div>
      <h1>{props.item.title}</h1>
      <p><strong>{props.item.startDate} - {props.item.endDate}</strong></p>
      <p>{props.item.description}</p>
    </div>
  )
}

export default Card

