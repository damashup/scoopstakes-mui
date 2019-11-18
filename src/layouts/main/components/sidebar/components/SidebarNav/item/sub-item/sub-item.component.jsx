import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';

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
        <ListItem     
            component={CustomRouterLink} 
            to={`${base}/${subitem.linkUrl}`}
        >
            <ListItemText primary={subitem.title} />
        </ListItem>
  )};
      
export default SidebarSubItem;
