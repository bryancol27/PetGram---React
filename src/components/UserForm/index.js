import React, { Fragment, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

//import custom hook
import { useInputValue } from '../../hooks/UseInputValue';

import { Form, Input, Button, Title, Error, Loading } from './styles'

//custom hook send data
import { useSendData } from '../../hooks/useSendData';

//import context for get a function to change the current token
import { Context } from '../../context/Context'

export const UserForm = ({ title, register }) => {
  
  const navigate = useNavigate();

  const email = useInputValue('');
  const password = useInputValue('');

  //We get the changer state for token
  const { switchAuth } = useContext(Context);
  
  //hook para definir cual tipo de metodo se va a usar y además retornar los valores en eventos
  const [ data, error, loading, typeFunction ] = useSendData(register, email.value, password.value);

  if(data){
    const token = data.signup || data.login
  
    setTimeout(() => {
      switchAuth(token)
      navigate('/')
    }, 1000)

  };

  return (
    <Fragment>
      <Title>{title}</Title>

      { error && <Error>Hubo un error en tu registro</Error> }
      { loading && <Loading>Cargando</Loading> }

      <Form
        onSubmit={typeFunction}
      >
        <Input 
          placeholder='Email' 
          value={email.value} 
          onChange={email.onChange}
        />
        <Input 
          placeholder='Password' 
          value={password.value} 
          onChange={password.onChange}
        />

        <Button 
          type='submit'
          disabled={ loading }
        >{title}</Button>
      </Form>
    </Fragment>
  )
};
