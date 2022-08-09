import React, { Fragment, useEffect, useRef, useState } from 'react'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg"

// import styled Components
import { ImageWrapper, Img, Button, Article } from './styles'

//icons from react-icon
import { AiOutlineHeart as HeartOutline} from "react-icons/ai";
import { AiFillHeart as HeartFilled} from "react-icons/ai";

//custom hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {

  const key = `like-${id}`
  
  const { storedValue, setLocalstorage } = useLocalStorage(key);
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
            <Button
              onClick={() => setLocalstorage(!storedValue) }
            >
              { !storedValue 
                ? <HeartOutline size='25px'/> 
                : <HeartFilled size='25px' /> 
              } {likes} likes
            </Button>
          </Fragment>
        )
      }
    </Article>
  )
}

export { PhotoCard }
