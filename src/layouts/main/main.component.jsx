import React, { useState } from 'react';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { Sidebar, Topbar, Footer } from './components';
import MainRoutes from './components/routes';
import {OverallDiv} from './main.styles';

const Main = () => {

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {defaultMatches: true});
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };


  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <OverallDiv>

      <Topbar onSidebarOpen={handleSidebarOpen} />
      
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />

      <MainRoutes />

      <Footer />

    </OverallDiv>
  );
};

export default Main;
