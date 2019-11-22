import React, { useState } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/selectors/user.selectors';
import { Switch, Route, Redirect } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@material-ui/styles';
import {useStyles} from './main.styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Sidebar, Topbar, Footer } from './components';
import { Landing, SignIn, SignUp} from '../../pages';
import Section from '../section';
import SignUpPage from '../../pages/signup';



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
      {/* <main className={classes.content}> */}
      <Grid container direction='row'>
        
        <Grid item xs={9}>
        <Switch>
          <Route exact path='/' render={() => currentUser ? <Redirect to='/dashboard' />: <Landing />} />
          {/* <Route exact path='/play' render={() => currentUser ? <Redirect to='/dashboard' />: <Landing />} /> */}
          <Route exact path='/signup' render={() => currentUser ? <Redirect to='/dashboard' />: <SignUp />} /> 
          <Redirect from='/sign-out' to='/signin' />
          <Route path='/:section'><Section currentUser={currentUser} /></Route>
          <Route exact path='/dashboard' render={() => currentUser ? <Section />: <SignIn />} />
        </Switch>
        </Grid>
        <Grid item xs={3}>
          {currentUser ? 
          <div>You're logged in... Some juicy info will go here</div>
          :
          <SignUpPage />
          }
        </Grid> 
      </Grid>  

        <Footer />
      {/* </main> */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Main);
