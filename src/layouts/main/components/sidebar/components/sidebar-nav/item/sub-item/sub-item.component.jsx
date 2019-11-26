import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';
import {SubListItem} from './sub-item.styles';

const CustomRouterLink = forwardRef((props, ref) => (

    <div
      ref={ref}
      style={{ flexGrow: 1 }}
    >
      <RouterLink {...props} />
    </div>
  
  ));

const SidebarSubItem = ({subitem, base}) => {
    
    return ( 
        <SubListItem     
            component={CustomRouterLink} 
            to={`${base}/${subitem.linkUrl}`}
        >
            {subitem.title}
        </SubListItem>
  )};
      
export default SidebarSubItem;
