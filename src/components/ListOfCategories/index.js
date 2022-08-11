import React, { Fragment, useEffect, useState } from 'react';

import { Category } from '../Category';

//styled components to List of categories
import { List, Item } from './styles'

// import customHook
import { useCategoriesData } from '../../hooks/useCategoriesData'

export const ListOfCategories = () => {

  const { categories, loading } = useCategoriesData();

  const [ showFixed, setShowFixed ] = useState(false)

  useEffect(() => {
    const onScrooll = e => {
      const newShowFixed = window.scrollY;

      if(newShowFixed > 200){
        setShowFixed(true)
      }else{
        setShowFixed(false)
      }
    };

    document.addEventListener('scroll', onScrooll)
  }, []);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(element => 
        <Item key={element.id}>
          <Category 
            {...element}
            path={`/pet/${element.id}`}
          />
        </Item>
        )
      }
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)} 
    </Fragment>
  )
};
