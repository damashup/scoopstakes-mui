import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Spinner from '../../../../../page-elements/spinner/app-spinner/spinner.component';
import SeasonLeaderboardTable from './all-seasons-table.component';
import { selectLatestSeason } from '../../../../../../redux/season/selectors/select-latest-season';


const SEASON_RESULTS = gql`
    query overallResults($season: String){
        overallResults(season: $season){
            id
            season
            position  
            entrant
            numberOfEntries
            total_points
            total_sbd
            
          }
  }
`;

const SeasonResultsContainer = ({selectLatestSeason}) => {

    return (
        <Query query={SEASON_RESULTS } variables={{season: selectLatestSeason}}>
            {
                ({loading, data}) => { 
                if (loading) return <Spinner />;
                return <SeasonLeaderboardTable seasonResults={data.overallResults.slice(0, 3)} />
                }
            }
        </Query>
    )

};

const mapStateToProps = createStructuredSelector({
    selectLatestSeason: selectLatestSeason
})

export default connect(mapStateToProps)(SeasonResultsContainer);