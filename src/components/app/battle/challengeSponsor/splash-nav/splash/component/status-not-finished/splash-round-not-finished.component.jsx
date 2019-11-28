import React from 'react';
import Grid from '@material-ui/core/Grid';
import ThumbUp from '@material-ui/icons/ThumbUp';

import {PaperDiv} from './splash-round-not-finished.styles';
import SplashEntry from '../entry';
import SplashOutcome from '../outcome';

const SplashNotEntered = ({player, playerImage, playerPoints, opponent, opponentImage, opponentPoints}) => {
    // const classes = useStyles();

    // const playerButtonClass; 
    // const opponentButtonClass;
    const points= '-'; 
    const resultText = 'You\'re challenging Nanzo! Resuts will be in at the end of the round.'; 
    const resultEmoji = <ThumbUp  fontSize='inherit' />;

   

    return (

            <PaperDiv square>
                <Grid container justify="center" alignItems="center">
                    <SplashEntry 
                        image={playerImage} 
                        entrantType={player} 
                        points={points}
                    />

                    <SplashEntry 
                        image={opponentImage} 
                        entrantType={opponent} 
                        points={points}
                    />
                </Grid> 
                <SplashOutcome
                    resultText={resultText}
                    resultEmoji={resultEmoji}
                />
            </PaperDiv>

        )
    
}

export default SplashNotEntered;

