import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { RoundNoHeaderPaper, TypographyHeader } from './styles';
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link as RouterLink} from 'react-router-dom';
import { selectActiveRound } from '../../../../../redux/round/selectors/round.selectors';
import { fetchSingleRoundStart } from '../../../../../redux/round/actions';

const SplashNav = ({
                    selectNextRound,
                    roundNo,
                    previousRound,
                    previous,
                    next,
                    base,
                    activeRound,
                    fetchSingleRound}) => {
        
        const [roundRef, setRoundRef] = useState('');
        console.log(roundRef);                
        const handleNext =() => {
            fetchSingleRound(next)
            setRoundRef(activeRound);
        }

        const handlePrevious =() => {
            setRoundRef(activeRound);
        }

        return  (
                <>
                    
                    <RoundNoHeaderPaper 
                        square 
                        elevation={0}
                    >
                        {previousRound > 0 
                        ?
                            <Button 
                                component={RouterLink}
                                to={`${base}/${previous}`}
                                onClick={handlePrevious}
                            >
                                <ArrowBackIosIcon />
                            </Button>
                        :
                            <div>&nbsp;</div>
                        } 
            
                        <TypographyHeader 
                            variant="h2" 
                            component="h2"
                        >
                            Round {roundNo}
                        </TypographyHeader>
                        {activeRound[0].round_no}
                        {roundNo === selectNextRound.uid 
                        ?
                        <div>&nbsp;</div>
                        :               
                        <Button  
                            component={RouterLink} 
                            to={`${base}/${next}`}
                            onClick={handleNext}
                        >
                            <ArrowForwardIosIcon />
                        </Button>
                        } 
                    </RoundNoHeaderPaper>

                    {/* <Splash 
                        // roundRef={roundRef} 
                    /> */}

                </>    
                )}

const mapStateToProps = createStructuredSelector({
    // currentUser: selectCurrentUser,
    activeRound: selectActiveRound,
    });

const mapDispatchToProps = dispatch => ({
    fetchSingleRound: roundId => dispatch(fetchSingleRoundStart(roundId)),
        
})
    
    export default connect(mapStateToProps, mapDispatchToProps)(SplashNav);
