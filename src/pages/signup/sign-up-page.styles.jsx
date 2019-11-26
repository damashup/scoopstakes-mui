import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { colorGreyDisabled } from '../../components/page-styles/base-styles';

export const SignUpPageDiv = styled.div`
    margin: 0 auto;
    width: 38rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
`;

export const SignUpPageGrid = styled(Grid)`&&{
    background-color: ${colorGreyDisabled};
    padding: 2rem;
    //border-radius: 20px
}`;