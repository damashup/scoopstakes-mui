import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectNextRound, selectActiveRound } from '../../../../../redux/round/selectors/round.selectors';
import Spinner from '../../../../page-elements/spinner/with-spinner/with-spinner.component';
import SplashNavComponent from './splash-nav.component';

function zeroPad(num, places) {
    return String(num).padStart(places, '0')
  }

const SplashNav = ({selectNextRound, activeRound, roundId, base}) => {

    const seasonNo      = roundId.split('-').shift();
    const roundNo       = roundId.split('-').pop();
    const previousRound = zeroPad(parseInt(roundNo) - 1, 2);
    const previous      = `${seasonNo}-${previousRound}`;
    const nextRound     = zeroPad(parseInt(roundNo) + 1,2);
    const next          = `${seasonNo}-${nextRound}`;

    return (
        activeRound 
        ?
        <SplashNavComponent
            selectNextRound={selectNextRound}
            seasonNo={seasonNo}
            roundNo={roundNo}
            previousRound={previousRound}
            previous = {previous}
            nextRound={nextRound}
            next = {next}
            base={base}

        />
        : 
        <Spinner />
    )
}

const mapStateToProps = createStructuredSelector ({
    selectNextRound: selectNextRound,
    activeRound: selectActiveRound
});

export default withRouter(connect(mapStateToProps)(SplashNav));
