import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import {
        HeaderLogo,
        TopbarAppBar, 
        TopbarToolbar
      } from './topbar.styles';

import {GrowDiv} from '../../../../components/page-styles/base-styles'      



const Topbar = ({ onSidebarOpen}) => {

  return (
    <TopbarAppBar >
      <TopbarToolbar color='secondary'>

        <RouterLink to="/">
          <HeaderLogo 
            alt="Logo" 
            src='/images/nanzo-logo.svg' /
          >
        </RouterLink>

        <GrowDiv />

        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

      </TopbarToolbar>
    </TopbarAppBar>
  );
};


export default Topbar;
