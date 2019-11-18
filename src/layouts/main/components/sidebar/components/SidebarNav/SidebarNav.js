import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../../../../../redux/directory/directory.selectors';
import {selectCurrentUser} from '../../../../../../redux/user/selectors/user.selectors';
import { List} from '@material-ui/core';
import SideBarItem from './item/SidebarItem';

const SidebarNav = ({sections, currentUser}) => (
  <List>
    {sections.map((page) => {
      if((page.private && !currentUser) || (page.publicOnly && currentUser)) return null;
      return <SideBarItem page={page} key={page.id}/>
    })}
  </List>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  currentUser: selectCurrentUser
})      

export default connect(mapStateToProps)(SidebarNav);
