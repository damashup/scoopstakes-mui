import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {checkUserSession} from './redux/user/actions/check-user-session/check-user-session';
import {fetchAllTeamsStart} from './redux/team/actions/fetch-all-teams/start';

import './App.scss';
// import MainPageContainer from './components/page-templates/main-page/main-page.container';
import {Main} from './layouts'

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const App = ({checkUserSession, fetchAllTeams}) => {

  useEffect(() => {checkUserSession()}, [checkUserSession]);
  useEffect(() => {fetchAllTeams()}, [fetchAllTeams])
  
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
            {/* <MainPageContainer /> */}
            <Main />
        </ThemeProvider>
      
  
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchAllTeams: () => dispatch(fetchAllTeamsStart()),
})

export default connect(null,mapDispatchToProps)(App);
