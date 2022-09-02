import React from 'react'
import { Card } from '../card'
import { InsideBody } from './insideBody'

export const InsideCardContainer = () => {
  return (
    <div className="cardContainer">
       <InsideBody />
        <div className="cardContainer__sideBar">
          <Card />
        </div>
    </div>
  )
}
