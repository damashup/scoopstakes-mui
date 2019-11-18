import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {checkUserSession} from './redux/user/actions/check-user-session/check-user-session';
import {fetchAllTeamsStart} from './redux/team/actions/fetch-all-teams/start';
import fetchAllDirectory from './redux/directory/actions/fetch-all-directory/start';

import './App.scss';
import {Main} from './layouts'

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const App = ({checkUserSession, fetchAllTeams, fetchAllDirectory}) => {

  useEffect(() => {checkUserSession()}, [checkUserSession]);
  useEffect(() => {fetchAllTeams()}, [fetchAllTeams]);
  useEffect(() => {fetchAllDirectory()}, [fetchAllDirectory]);
  
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchAllTeams: () => dispatch(fetchAllTeamsStart()),
  fetchAllDirectory: () => dispatch(fetchAllDirectory())
})

export default connect(null,mapDispatchToProps)(App);

