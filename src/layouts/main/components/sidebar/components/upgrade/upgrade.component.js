import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {PatreonButton} from './styles';
import { Grid } from '@material-ui/core';


const Upgrade = () => {


  return (
    <Grid container direction='column' alignItems='center' justify='space-between' >
      <RouterLink to='/play/patron-benefits'>
        <PatreonButton 
          alt='Become a Patron' 
          src='/images/become_a_patron_button.png' 
        />
      </RouterLink>
    </Grid>
  );
};


export default Upgrade
