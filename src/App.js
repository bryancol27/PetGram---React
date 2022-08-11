import React, { Suspense, useContext } from 'react'

//import logo component
import Logo from './components/Logo';

//import components
import { Navbar } from './components/Navbar';

// import pages
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';

// GlobalStyles from styled components 
import { GlobalStyle } from './styles/GlobalStyles';

// import react-router
import { Routes, Route, Navigate } from 'react-router-dom'; 

//import context
import { Context } from './context/Context';


const Favs = React.lazy(() => import('./pages/Favs'));

const App = () => {

  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<h3>cargando</h3>}> 
      <GlobalStyle />
      <Logo/>

      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/pet/:id' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/favs' element={(isAuth) ? <Favs/> : <Navigate to='/welcome'/>}/>
        <Route path='/user' element={(isAuth) ? <User /> : <Navigate to='/welcome'/>}/>
        <Route path='/welcome' element={<NotRegisteredUser />}/>
      
        <Route path='*' element={<h2>No fue posible cargar tu solicitud</h2>}/>
      </Routes>

      <Navbar/>
    </Suspense>
  )
}

export default App
