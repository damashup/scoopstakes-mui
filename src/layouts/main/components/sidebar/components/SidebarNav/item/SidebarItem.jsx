import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {connect} from 'react-redux';
import {signOutStart} from '../../../../../../../redux/user/actions/sign-out/start/sign-out-start.action';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import {SidebarListItemText, SidebarListItem} from './SidebarItem.styles'
import SidebarSubItem from './sub-item/sub-item.component';

const CustomRouterLink = forwardRef((props, ref) => (

  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>

));

const SidebarItem = ({page, signOutStart}) => {
  const subsections = page.subsections ? page.subsections : null;
  console.log(page.subsections ? page.subsections : 'no subsection')
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

    return (
    <>

      {subsections 
      ?
      <>
      <SidebarListItem 
        key={page.title}
        component={CustomRouterLink} 
        to={page.href}
        onClick={page.signOut ? signOutStart:handleClick}
      >

        {page.title}
        {open ? <ExpandLess /> : <ExpandMore />}

      </SidebarListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>

        <List component="div" disablePadding>
          {subsections.map(subsection => <SidebarSubItem 
                                            subitem={subsection} 
                                            key={subsection.id}
                                            base={page.href}
                                          />)}
        </List>
      </Collapse>
      </>
      :
      <SidebarListItem
        key={page.title}
        component={CustomRouterLink} 
        to={`${page.href}`}
        onClick={page.signOut ? signOutStart:handleClick}
      >
        {page.title}
      </SidebarListItem>   
      }
    </>
  )
};
      

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(null,mapDispatchToProps)(SidebarItem);
