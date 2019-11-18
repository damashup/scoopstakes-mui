import React, { useState } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/selectors/user.selectors';
import { Switch, Route, Redirect } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@material-ui/styles';
import {useStyles} from './main.styles';
import { useMediaQuery } from '@material-ui/core';
import { Sidebar, Topbar, Footer } from './components';
import { Landing, SignIn } from '../../pages';
import Section from '../section';
import Subsection from '../subsection';



const Main = props => {
  const { currentUser} = props;

  console.log(currentUser);

  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
      <Switch>
        <Route exact path='/' render={() => currentUser ? <Redirect to='/dashboard' />: <Landing />} />
        <Route exact path='/signin' render={() => currentUser ? <Redirect to='/dashboard' />: <SignIn />} />
        <Route exact path='/:section' component={Section} />
        <Route exact path='/:section/:subsection' component={Subsection} />
      </Switch>
        <Footer />
      </main>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Main);
