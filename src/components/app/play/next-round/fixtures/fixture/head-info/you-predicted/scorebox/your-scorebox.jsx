import React from 'react'
import {ScoreInputBox} from './styles';

const YourScoreBox = ({score}) => {
    return (
        <div>
            <ScoreInputBox>{score}</ScoreInputBox>
        </div>
    )
}

export default YourScoreBox
