import React from 'react'

//import components
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotCard } from './components/ListOfPhotoCards';
//import logo component
import Logo from './components/Logo';

import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
  return (
    <div>
      <Logo/>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotCard/>
    </div>
  )
}

export default App
