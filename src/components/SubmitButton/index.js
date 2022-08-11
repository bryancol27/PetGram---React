import React from 'react';

import { Button } from './styles';

export const SubmitButton = ({ event, children }) => {
  return (
    <Button
      onClick={event}
    >
      { children }
    </Button >
  )
};
