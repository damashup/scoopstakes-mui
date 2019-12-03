import styled from 'styled-components';
import { Typography, Avatar } from '@material-ui/core';

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