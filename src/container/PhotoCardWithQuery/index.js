import React, { useState } from 'react';
import { PhotoCard } from '../../components/PhotoCard';

import { gql, useQuery } from '@apollo/client';

const GET_PHOTOS_SINGLE = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      userId
      likes
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {

  const [ currentView, setCurrentView ] = useState({})

  const { loading, error, data } =  useQuery(GET_PHOTOS_SINGLE, {
    variables: { id }
  });

  if(!!data && !currentView.id){
    setCurrentView(data.photo)
  }

  return (
    <PhotoCard likes={currentView.likes} src={currentView.src} id={currentView.id}/>
  )
};
