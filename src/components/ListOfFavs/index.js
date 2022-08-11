import React from 'react';

//import components
import { PhotoCard } from '../PhotoCard';

const ListOfFavs = ({ favs }) => {
  return (
    <ul style={{padding: '0px', width: '100%'}}>
      { favs.map(element => <PhotoCard 
        key={element.id} 
        id={element.id}
        likes={element.likes}
        src={element.src}
        
          />
        ) 
      }
    </ul>
  )
};

export { ListOfFavs }
