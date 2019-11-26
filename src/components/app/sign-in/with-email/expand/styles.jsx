import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {colorWhite, colorGreyLight2, colorPrimaryDark, colorQuinaryDark } from '../../../../page-styles/base-styles';


export const FixturesListBody = styled(List)`&&{
    background-color: ${colorQuinaryDark};
    padding: 1rem;
    border-radius: 20px;   
}`

export const FixturesListHeaderBody = styled(List)`&&{
    // border: 1px solid ${colorWhite};
    background-color: ${colorQuinaryDark};
    color: ${colorWhite}
    padding: 2rem;
}`

export const FixturesListHeaderGrid = styled(Grid)`&&{
    font-size: 300%;
}`

export const FixturesListHeaderItem = styled.div`&&{
    display: block;
    // &:last-child { 
    //     border: 1px solid ${colorWhite};
    //     padding: 1rem;
    // }
}`