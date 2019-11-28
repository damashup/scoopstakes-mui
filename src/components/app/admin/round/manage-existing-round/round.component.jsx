import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectOpenRounds } from '../../../../../redux/round/selectors/round.selectors';
import AllRoundsTable from './table';

const RoundList = ({allRounds}) => {
    return <AllRoundsTable allRounds={allRounds}/>

}

const mapStateToProps = createStructuredSelector({
    allRounds: selectOpenRounds
})

export default connect(mapStateToProps)(RoundList);
