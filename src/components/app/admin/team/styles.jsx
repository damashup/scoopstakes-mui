import styled from 'styled-components';
import { Paper, Grid } from '@material-ui/core';
import { colorWhite, colorGreyLight1 } from '../../../page-styles/base-styles';

export const AddTeamPaper = styled(Paper)`&&{
    margin-top: 2.3rem;
    padding: 2rem;
    font-size: 150%;
}`;

export const PageGrid = styled(Grid)`&&{
    //margin-top: 2rem;
    padding: 1rem;
    background-color: ${colorGreyLight1}
    color: ${colorWhite}
}`;