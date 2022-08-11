import React, { Fragment, useEffect, useRef, useState } from 'react'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg"

// import styled Components
import { ImageWrapper, Img, Article } from './styles';

//custom hooks
import { useNearScreen } from '../../hooks/useNearScreen';

//components
import { FavButton } from '../FavButton';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {

  const key = `like-${id}`
  
  const { show, ref } = useNearScreen()

  return (
    <Article ref={ref}>
      {
        show && (
          <Fragment>
            <a href={`/detail/${id}`}>
              <ImageWrapper>
                <Img src={src}/>
              </ImageWrapper>
            </a>
            <FavButton 
              likes={likes} 
              key_value={key}
              id={id}
            />
          </Fragment>
        )
      }
    </Article>
  )
}

export { PhotoCard }
