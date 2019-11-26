import styled from 'styled-components';
import {Grid, Box} from '@material-ui/core';
import List from '@material-ui/core/List';
import {colorWhite, colorQuinaryDark } from '../../../../../../page-styles/base-styles';


export const FixturesListBody = styled(List)`&&{
    background-color: ${colorQuinaryDark};
    padding: 1rem; 
}`

export const FixturesListHeaderBody = styled(List)`&&{
    background-color: ${colorQuinaryDark};
    color: ${colorWhite}
}`

export const FixturesListHeaderGrid = styled(Grid)`&&{
}`

export const FixturesListHeaderItem = styled(List)`&&{
    margin: 0 1rem;

}`