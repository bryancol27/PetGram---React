import React, { useEffect, useState } from 'react'

//import components
import { PhotoCard } from '../PhotoCard'

//Apollo fetch data 
import { useQuery, gql } from '@apollo/client';

//query get_posts 
const GET_POSTS = gql`
  query GetPosts($categoryId: ID){
    photos (categoryId: $categoryId){
      id
      categoryId
      src
      userId
      likes
    }
  }
`

const ListOfPhotCard = ({ category_id }) => {

  const [ posts, setPosts ] = useState([]);

  const { loading, error, data } =  useQuery(GET_POSTS, {
    variables: { categoryId: category_id }
  });

  if(!!data && posts.length == 0) {
    setPosts(data.photos);
  }

  return (
    <ul style={{padding: '0px', width: '100%'}}>
      { posts.map(element => <PhotoCard 
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

export {ListOfPhotCard}
