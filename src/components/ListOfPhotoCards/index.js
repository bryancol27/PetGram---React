import React from 'react'

//import components
import { PhotoCard } from '../PhotoCard'

const ListOfPhotCard = () => {
  return (
    <ul style={{padding: '0px', width: '100%'}}>
      { [1,2,3,4,5].map(element => <PhotoCard key={element} id={element}/>) }
    </ul>
  )
};

export { ListOfPhotCard }
