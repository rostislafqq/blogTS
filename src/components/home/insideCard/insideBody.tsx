import React from 'react'

interface InsideBodyProps  {
    id:number
    body:string 
    avatar:string 
}

export const InsideBody = () => {
  return (
    <div className="cardContainer__card">
    <div className="cardContainer__imgCard">
        
    </div>
    <p className="cardContainer__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ab magnam nesciunt, eos voluptatum distinctio adipisci cumque sint corporis. Voluptatem ad odit corrupti inventore, consequuntur expedita soluta adipisci quasi omnis.
    </p>
</div>
  )
}
