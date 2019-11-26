import React from 'react';
import {connect} from 'react-redux';
import {FixturesListHeaderItem} 
        from './styles';
import { GrowDiv } from '../../../../../../page-styles/base-styles';
import { Avatar, Box, Grid, Button } from '@material-ui/core';
import TeamInfo from './team-info/fixture-team-info.component';
import FinalScore from './final-score';
import YouPredicted from './you-predicted';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../../../../../redux/user/selectors/user.selectors';

const HeaderInfo = ({result, currentUser}) => {

  return (

        <>
        <Grid item xs={10}>
            <Grid 
              container 
              direction='row' 
              justify='center' 
              alignItems='center' 
              spacing={1}
            >
              <Grid item xs={4}>
                <TeamInfo team={result.homeTeam}/>
              </Grid>

              <Grid item xs={4}>
                {currentUser
                ?
                <>
                  <YouPredicted />
                  <FinalScore 
                    homeTeamScore={result.homeTeamScore} 
                    awayTeamScore={result.awayTeamScore}
                  />
                </>
                : <Grid container justify='center'>v</Grid>
                }

              </Grid>

              <Grid item xs={4}>
                <TeamInfo team={result.awayTeam}/>
              </Grid>
          
              
            </Grid>
          </Grid>
          </>

  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});    

export default connect(mapStateToProps)(HeaderInfo);
