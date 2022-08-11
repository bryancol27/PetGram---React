import React, { Fragment } from "react";
import { Helmet } from 'react-helmet';

export const Layout = ({ children, title, subtitle }) => {
  return (
    <Fragment>
      <Helmet>
        <title>
          {title + ' | PetGram🐶'}
        </title>
        <meta name="description" content={subtitle}/>
      </Helmet>
    </Fragment>
  )
};
