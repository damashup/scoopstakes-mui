import React from 'react';
import {TeamLogo, TeamLogoImage} from './styles';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const TeamLogoComponent = ({logoUrl}) => <img alt="logo" src={logoUrl} height='80px' />

export default TeamLogoComponent;
