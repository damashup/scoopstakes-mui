import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {colorWhite, colorGreyLight2, colorPrimaryDark, colorQuinaryDark, colorQuinaryLight } from '../../../../page-styles/base-styles';


export const FixturesListBody = styled(List)`&&{
    background-color: ${colorQuinaryLight};
    padding: 1rem;
    border-radius: 20px;   
}`

export const FixturesListHeaderBody = styled(List)`&&{
    // border: 1px solid ${colorWhite};
    background-color: ${colorQuinaryLight};
    color: ${colorWhite}
}`

export const FixturesListHeaderGrid = styled(Grid)`&&{
    font-size: 150%;
    font-weight: bold;
}`

export const FixturesListHeaderItem = styled.div`&&{
    margin: 0 1rem;

}`