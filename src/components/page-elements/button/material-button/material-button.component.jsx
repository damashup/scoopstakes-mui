import React from 'react';

import {MaterialButtonDiv} from './material-button.styles';

const MaterialButton = ({children, ...otherProps}) => (
  <MaterialButtonDiv {...otherProps}>
    {children}
  </MaterialButtonDiv>
);

export default MaterialButton;
