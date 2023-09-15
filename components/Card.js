import React from "react"

export default function Card(props) {
  return (
    <div className="card">
      <img src={`${props.imageUrl}`} className="card--img" />
      <div className="card--info">
        <div className="card--location">
          <img src="../images/location-logo.png" />
          <span className="card--capitalized">{props.location}</span>
          <span className="gray"><a href={`${props.googleMapsUrl}`}>View on Google Maps</a></span>
        </div>
        <h1>{props.title}</h1>
        <h3>{props.startDate} - {props.endDate}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}