import React, {useEffect} from "react";
import {connect} from 'react-redux';
import Splash from "./splash.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../../../../redux/user/selectors/user.selectors";
import fetchPlayerOneResultForRoundStart from "../../../../../../redux/result/actions/fetch-player-one-result-for-round/start/fetch-player-one-result-for-round-start";
import fetchPlayerTwoResultForRoundStart from "../../../../../../redux/result/actions/fetch-player-two-result-for-round/start/fetch-player-two-result-for-round-start";
import { selectActiveRound } from "../../../../../../redux/round/selectors/round.selectors";
import { fetchSingleRoundStart } from "../../../../../../redux/round/actions";


const SplashContainer = ({ 
                        roundId,
                        currentUser,
                        activeRound,
                        playerOneResult,
                        playerTwoResult,
                        fetchSingleRound,
                        roundRef,
                        }) => {
    console.log(activeRound[0])
    const steemUsername = currentUser ? currentUser.steemUsername : null;
    const playerOne = steemUsername;
    // console.log(`Player One is ${playerOne}`);
    const playerTwo = "nanzo-scoop";
    // console.log(`Player Two is ${playerTwo}`);
    // playerOneResult;
    
    // playerTwoResult(roundId, playerTwo);
    // const asyncFetchPlayerResults = async () => {
    //     const pOneResult = await fetch playerOneResult({ roundId, playerOne })

    // }
    
    const fetchPlayerOneResult = playerOneResult({ playerOne, roundId  });
    console.log(`Player One result for round ${roundId} is here... ${fetchPlayerOneResult}`);
    const fetchPlayerTwoResult = playerTwoResult({ playerTwo, roundId });
    console.log(`Player Two result for round ${roundId} is here... ${fetchPlayerTwoResult}`);
    
    // if(fetchPlayerOneResult && fetchPlayerTwoResult) 
        return (
                <>
                    <Splash 
                        roundId={roundId} 
                    />
                </>
                )
    // return 'Loading...'
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  activeRound: selectActiveRound,
});

const mapDispatchToProps = dispatch => ({
    playerOneResult: playerOneRoundData => dispatch(fetchPlayerOneResultForRoundStart(playerOneRoundData)),
    playerTwoResult: playerTwoRoundData => dispatch(fetchPlayerTwoResultForRoundStart(playerTwoRoundData))
    
  })

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);
