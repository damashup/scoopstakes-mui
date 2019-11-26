import React from 'react';
import { Drawer } from '@material-ui/core';
import SidebarNav from './components/sidebar-nav';

import {
  SidebarDiv, 
  SidebarPaper,
  } from './sidebar.styles';


const Sidebar = ({open, variant, onClose, className, ...rest}) => (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <SidebarPaper elevation={0}>
        <SidebarDiv >
          <SidebarNav />
        </SidebarDiv>
      </SidebarPaper>   
    </Drawer>
  );



export default Sidebar;
