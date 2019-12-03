import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { submitButton, colorPrimaryDark } from '../../../../../../../components/page-styles/base-styles';

export const PatreonButton = styled.img`
    height: 5rem;
    width: auto; 
`;

export const SignInButton = styled(Button)`&&{
    margin-bottom: 2rem;
    ${submitButton}
    font-size: 200%;
    background-color: ${colorPrimaryDark}
}`