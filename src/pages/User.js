import React, { Fragment, useContext } from 'react';
import { Context } from '../context/Context';

//import components
import { SubmitButton } from '../components/SubmitButton';

//use of component from react helmet
import { Layout } from '../components/Layout'

export const User = () => {

  const { quitAuth } = useContext(Context);

  return(
    <Fragment>

      <Layout
        title='User'
      />

      <h1>User</h1>
      <SubmitButton
        event={quitAuth}
      >
        LogOut
      </SubmitButton>
    </Fragment>
  )
};
