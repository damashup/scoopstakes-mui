import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

import {useStyles, TypographyHeader, HeaderRow, VersusAvatar} from './splash-entry.styles';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../../../../../../redux/user/selectors/user.selectors';

const SplashEntry = ({image, entrant, buttonClass, points, currentUser}) => {
    const user = currentUser ? currentUser.steemUsername : 'null';
    const classes = useStyles();

    return (
        <HeaderRow>
            <VersusAvatar alt='Avatar' src={image} className={classes.bigAvatar}/>
                <TypographyHeader variant="h1" component="h2">
                    {(entrant === user) ? 'You' : entrant}
                </TypographyHeader>
            <Button variant="outlined" color='primary' className={buttonClass}>
                <TypographyHeader variant="h1" component="h2">{points}</TypographyHeader>
            </Button>      
        </HeaderRow>

        )
    
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(SplashEntry);

