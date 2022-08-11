import React from 'react';

import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';

import { useParams } from 'react-router-dom'

const Detail = () => {

  const { id } = useParams()

  return (
    <PhotoCardWithQuery id={id}/>
  )
};

export { Detail }
