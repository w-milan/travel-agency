import React from 'react'
import { FaMapPin } from 'react-icons/fa';

const Card = (props) => {
  return (
    <div className='card-item'>
      <img src={props.item.imageUrl} alt="" />
      <div className='information'>
        <div className="map">
          <p className='country'><FaMapPin/>{props.item.location}</p>
          <a href={props.item.googleMapsUrl} className='g-map' target='_blank'>Visit on Google Maps</a>
        </div>
        <h1 className='title'>{props.item.title}</h1>
        <p className='dates'>{props.item.startDate} - {props.item.endDate}</p>
        <p className='description'>{props.item.description}</p>
      </div>
    </div>
  )
}

export default Card

