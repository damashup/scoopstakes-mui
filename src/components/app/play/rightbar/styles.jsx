import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { colorPrimaryDark, colorWhite } from '../../../page-styles/base-styles';

export const RightbarPaper = styled(Paper)`&&{
    flex-grow: 1;
    margin-left: 2rem;
    padding: 2rem;
    background-color: ${colorPrimaryDark};
    color: ${colorWhite};
}`

export const RightBarDiv = styled.div`
    height: 100%;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
`;
