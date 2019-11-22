import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {checkUserSession} from './redux/user/actions/check-user-session/check-user-session';
import fetchAllTeamsStart from './redux/team/actions/fetch-all-teams/start';
import fetchAllRoundsStart from './redux/round/actions/fetch-all-rounds/start';
import fetchOpenRoundsStart from './redux/round/actions/fetch-open-rounds/start';
import fetchAllDirectory from './redux/directory/actions/fetch-all-directory/start';

import './App.scss';
import {Main} from './layouts'

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const App = ({checkUserSession, fetchAllTeams, fetchAllDirectory, fetchAllRounds, fetchOpenRounds}) => {

  useEffect(() => {checkUserSession()}, [checkUserSession]);
  useEffect(() => {fetchAllTeams()}, [fetchAllTeams]);
  useEffect(() => {fetchAllDirectory()}, [fetchAllDirectory]);
  // useEffect(() => {fetchAllRounds()}, [fetchAllRounds]);
  useEffect(() => {fetchOpenRounds()}, [fetchOpenRounds]);
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
  fetchAllDirectory: () => dispatch(fetchAllDirectory()),
  fetchAllRounds: () => dispatch(fetchAllRoundsStart()),
  fetchOpenRounds: () => dispatch(fetchOpenRoundsStart()),
  
})

export default connect(null,mapDispatchToProps)(App);

