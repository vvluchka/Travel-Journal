import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Card from "./Components/Card/card"
import Data from "./Data"
import "./Components/Navbar/navbar.css"
import "./Components/Card/card.css"

export default function App(){
  const cards = Data.map(card => {
    return <Card 
              key = {card.id}
              card = {card}
            />
  })
  return(
    <div>
      <Navbar />
      {cards}
    </div>  
  )
}
