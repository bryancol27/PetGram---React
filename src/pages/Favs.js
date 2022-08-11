import React, { Fragment, useState } from 'react';

//import react apollo
import { gql, useQuery } from '@apollo/client';

//import components
import { ListOfFavs } from '../components/ListOfFavs';

//use of component from react-helmet
import { Layout } from '../components/Layout'; 

const GET_FAVORITES = gql`
query getFavs{
  favs{
    id
    categoryId
    src
    likes
    userId
  }
}
`;

const Favs = () => {

  const [ favorites, setFavorites ] = useState([]);

  const { data, error, loading } = useQuery(GET_FAVORITES,
    {
      fetchPolicy: 'cache-and-network'
    });

  if(data && favorites.length == 0){
    setTimeout(() => {
      setFavorites(data.favs)
    }, 1000)
  }

  if(error == 'Error: user does not exist'){
    localStorage.clear();
  }

  return (
    <Fragment>
        <Layout 
        title='Favoritos'
        subtitle='El mejor lugar para disfrutar de fotos de las mejores animales del mundo'
      />

      <h2>Your favorites</h2>
      <ListOfFavs favs={favorites}/>
    </Fragment>
  )
};

export default Favs
