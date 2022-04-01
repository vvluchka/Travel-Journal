import React from "react"

export default function Card(props){
  return(
    <main className="main">
      <div className="card">
        <img className="card-image" src={props.card.coverImage}/>
        <div className="info">
          <div className="location">
            <img src="./img/icons/place-icon.svg"/>
            <p className="location-text">{props.card.location.country}</p>
            <a className="location-link" href = {props.card.location.geo} target="_blank">View on Google Maps</a>
          </div>
          <h1 className="title">{props.card.title}</h1>
          <b className="date">{props.card.date}</b>
          <p className="description">{props.card.description}</p>
        </div>
      </div>
    </main>
  )
}