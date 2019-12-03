import styled from 'styled-components';
import { Typography, Avatar, Paper } from '@material-ui/core';
import { colorPrimaryDark, colorWhite } from '../../../../../../../components/page-styles/base-styles';

export const ProfileDisplayNameTypography = styled(Typography)`&&{
    padding: 1rem;
    text-transform: capitalize;
}`;

export const ProfilePictureAvatar = styled(Avatar)`&&{
    padding: 1rem;
    height: 100px;
    width: 100px;
    border-radius: 50%;
}`;

export const LoggedInPaper = styled(Paper)`&&{
    width: 100%;
    padding: 1rem 0;
    background-color: ${colorPrimaryDark};
    color: ${colorWhite}
}`;