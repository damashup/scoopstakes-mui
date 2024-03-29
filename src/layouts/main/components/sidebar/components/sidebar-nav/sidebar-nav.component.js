import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../../../../../redux/directory/selectors/directory.selectors';
import {selectCurrentUser} from '../../../../../../redux/user/selectors/user.selectors';
import { List} from '@material-ui/core';
import SideBarItem from './item/sidebar-item';

const SidebarNav = ({sections, currentUser}) => {
  if(!sections)return null;
  return (
  <List>
    {sections.map((page) => {
      if((page.hiddenForSignedOutUser && !currentUser) || (page.hiddenForSignedInUser && currentUser)) return null;
      return <SideBarItem page={page} key={page.id}/>
    })}
  </List>
)};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  currentUser: selectCurrentUser
})      

export default connect(mapStateToProps)(SidebarNav);
