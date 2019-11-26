import React from 'react';
import { Grid } from '@material-ui/core';
import HowToPlayComponent from './how-to-play.component';

const HowToPlayContainer = () => {

    const stepItems = [
                {id : 1,
                title: 'Sign Up',
                description: 'Create an account',
                label: 'Join'
                },
                {id : 2,
                title: 'Play for Free',
                description: 'Enter your prediction.',
                label: 'Login'
                },
                {id : 3,
                title: 'Win Prizes',
                description: 'Climb the leaderboard & earn crypto',
                label: 'Leaderboard'
                },
                {id : 4,
                title: 'Battle!',
                description: 'Wager with others, for crypto or fun.',
                label: 'Battle'
                },
                {id : 5,
                title: 'Become a Patron',
                description: 'Become eligible for enhanced rewards & more',
                label: 'Membership'
            },
                {id : 6,
                title: 'Sponsor a Battle',
                description: 'Create prize pools & promote your brand',
                label: 'Sponsor'
                }
            ];
            console.log(stepItems)
    return (<HowToPlayComponent stepItems={stepItems} />)
                 
}

export default HowToPlayContainer;
