import React, { Fragment, useContext } from 'react';

//import components
import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => {

  return (
    <Fragment>
      <UserForm 
        title='Register'
        register={true}
      />

      <UserForm
        title='Log In'
        register={false}
      />
    </Fragment>
  )
};
