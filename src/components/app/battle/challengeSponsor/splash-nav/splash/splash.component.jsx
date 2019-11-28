import React from 'react';
import {connect} from 'react-redux';
import Fixtures from '../../fixtures';
import SplashComplete from './component/status-complete';
import SplashNotEntered from './component/status-not-entered';
import SplashNotFinished from './component/status-not-finished';
import { selectPlayerOneResultForRound, selectPlayerTwoResultForRound } from '../../../../../../redux/result/selectors/result.selectors';
import { createStructuredSelector } from 'reselect';

const Splash = ({playerOneResult, playerTwoResult, roundId}) => {

    console.log(roundId);
    console.log(playerOneResult);
    
    if(!playerOneResult) return(<SplashNotEntered />);
    if(!playerTwoResult) return('Loading...');
    const playerOneData = playerOneResult[0];
    const playerTwoData = playerTwoResult[0];
    console.log (playerOneData ? playerOneData.steem.userName : 'loading...');
    // const roundStatus = round.round_status;
    const player = playerOneData ? playerOneData.steem.userName : null;
    const playerImage = playerOneData ? `https://steemitimages.com/u/${player}/avatar` : null;
    const opponent = 'Nanzo';
    const opponentImage = '/images/nanzoscoop.jpg';

    // if(roundStatus !== 'complete') return(
    //         <SplashNotFinished 
    //             player={player} 
    //             playerImage={playerImage}
    //             opponent={opponent}
    //             opponentImage={opponentImage}
    //         />
    //     ); 
    
    const playerPoints = playerOneData ? playerOneData.totalPoints : -1;
    console.log(playerPoints)
    const opponentPoints = playerTwoData ? playerTwoData.totalPoints : -1 ;
    console.log(opponentPoints)
  

    return (
        <div>
            <SplashComplete 
                player={player} 
                playerImage={playerImage}
                playerPoints={playerPoints}
                opponent={opponent}
                opponentImage={opponentImage}
                opponentPoints={opponentPoints}
            />
            {/* <Fixtures 
                roundId={roundId} 
                entrant={player} 
                //teams={round.teams} 
                //scores={round.scores}
                player={player}  
                playerResult={playerOneResult}
                opponent={opponent}
                opponentResult={playerTwoResult}              
            /> */}
        </div>
        )   
}

const mapStateToProps = createStructuredSelector({
    playerOneResult: selectPlayerOneResultForRound,
    playerTwoResult: selectPlayerTwoResultForRound,
    
    });


export default connect(mapStateToProps)(Splash);

