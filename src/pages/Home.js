import React, { Fragment} from 'react';

//import components
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotCard } from '../components/ListOfPhotoCards';

import { useParams } from 'react-router-dom';

//use of component from react helmet
import { Layout } from '../components/Layout';

export const Home = () => {

  let { id } = useParams();

  return (
    <Fragment>

      <Layout 
        title='Las mejores foto'
        subtitle='El mejor lugar para disfrutar de fotos de las mejores animales del mundo'
      />

      <ListOfCategories />
      <ListOfPhotCard category_id={id}/> 
    </Fragment>
  )
}
