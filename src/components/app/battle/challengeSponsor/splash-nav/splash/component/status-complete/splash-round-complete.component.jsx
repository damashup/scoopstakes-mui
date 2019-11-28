import React from 'react';
import Grid from '@material-ui/core/Grid';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

import {useStyles, PaperDiv} from './splash-round-complete.styles';
import SplashEntry from '../entry';
import SplashOutcome from '../outcome';

const SplashComplete = ({player, playerImage, playerPoints, opponent, opponentImage, opponentPoints}) => {
    console.log(player)
    const classes = useStyles();

    let playerButtonClass, opponentButtonClass, resultText, resultEmoji;

    if(playerPoints > opponentPoints){
        playerButtonClass = classes.buttonWon;
        opponentButtonClass = classes.buttonLost;
        resultText = 'You won!';
        resultEmoji = <InsertEmoticonIcon fontSize='inherit' />;
    } else if (playerPoints < opponentPoints){
        playerButtonClass = classes.buttonLost;
        opponentButtonClass = classes.buttonWon;
        resultText = 'Nanzo won!';
        resultEmoji = <SentimentVeryDissatisfiedIcon  fontSize='inherit' />;
    } else {
        playerButtonClass = '';
        opponentButtonClass = '';
        resultText = `It's a draw!`;
        resultEmoji = <ThumbsUpDownIcon fontSize='inherit' />;
    }

    return (

            <PaperDiv square>
                <Grid container justify="center" alignItems="center">
                    <SplashEntry 
                        image={playerImage} 
                        entrant={player} 
                        buttonClass={playerButtonClass} 
                        points={playerPoints}
                    />

                    <SplashEntry 
                        image={opponentImage} 
                        entrant={opponent} 
                        buttonClass={opponentButtonClass} 
                        points={opponentPoints}
                    />
                </Grid> 
                <SplashOutcome
                    resultText={resultText}
                    resultEmoji={resultEmoji}
                />
            </PaperDiv>

        )
    
}

export default SplashComplete;

