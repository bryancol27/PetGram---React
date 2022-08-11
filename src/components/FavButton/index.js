import React from 'react';

//icons from react-icon
import { AiOutlineHeart as HeartOutline} from "react-icons/ai";
import { AiFillHeart as HeartFilled} from "react-icons/ai";

//import material styles
import { Button } from './styles';

//import custom hook
import { useLocalStorage } from '../../hooks/useLocalStorage'

//import mutation 
import { ToggleLikeMutation } from '../../container/ToogleLikeMutation';

export const FavButton = ({ key_value, likes, id }) => {
  
  const { storedValue, setLocalstorage } = useLocalStorage(key_value);

  const { mutationFunction } = ToggleLikeMutation();

  const handleFavClick = () => {
    !storedValue && mutationFunction({ variables: { input: {id} } })
    setLocalstorage(!storedValue);
  };

  return (
    <Button
      onClick={handleFavClick}
    >
      { !storedValue 
        ? <HeartOutline size='25px'/> 
        : <HeartFilled size='25px' /> 
      } {likes} likes
    </Button>
  )
};
