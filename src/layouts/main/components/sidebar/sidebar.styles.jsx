import styled from 'styled-components';
import {lg} from '../../../../components/page-styles/base-styles';
import { Paper } from '@material-ui/core';

export const SidebarPaper = styled(Paper)`&&{
    width: 240px;
    margin-top: 64px;
    height: calc(100%-64px);
    @media only screen and (max-width: ${lg}) { 
        margin-top: 0px;
        height: 100%;
    }
}`;

export const SidebarDiv = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
`;