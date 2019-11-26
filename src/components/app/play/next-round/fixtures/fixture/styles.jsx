import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import List from '@material-ui/core/List';
import {colorQuinaryDark } from '../../../../../page-styles/base-styles';


export const FixturesListBody = styled(List)`&&{
    padding: 1rem;
    border-bottom: 1px solid ${colorQuinaryDark};
    &:last-child {border-bottom: none;}  
}`

export const FixturesListHeaderBody = styled(List)`&&{

}`

export const FixturesListHeaderGrid = styled(Grid)`&&{
    //font-weight: bold;
}`

export const FixturesListHeaderItem = styled.div`&&{
    margin: 0 1rem;

}`