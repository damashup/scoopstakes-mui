import React from 'react';
import { Drawer } from '@material-ui/core';
import SidebarNav from './components/sidebar-nav';
import Profile from './components/profile';

import {
  SidebarDiv, 
  SidebarPaper,
  } from './sidebar.styles';
import UpgradePlan from './components/upgrade';


const Sidebar = ({open, variant, onClose, className, ...rest}) => (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <SidebarPaper elevation={0}>

        <SidebarDiv >
          <Profile />
          <SidebarNav />
          <UpgradePlan />
        </SidebarDiv>

      </SidebarPaper>   
    </Drawer>
  );



export default Sidebar;
