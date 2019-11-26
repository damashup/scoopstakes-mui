import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
        textMedium,
        linkDefault,
        colorQuinaryLight,
        colorQuinaryDark,
        colorWhite} from '../../../../page-styles/base-styles';
import { Button } from '@material-ui/core';



export const SignInWithEmailPasswordDiv = styled.div`
    ${textMedium}
    
    justify-self: flex-end;
    color: ${colorQuinaryLight};
    font-weight: bold;
    
  
`;


export const SignInTextDiv = styled.div`
    color: ${colorQuinaryDark}
`;

export const SignUpLink = styled(Link)`
    font-weight: bolder;
    ${linkDefault}
`;


export const SignInWithEmailHorizontalDiv = styled.div`
    background-color: ${colorWhite};
    display: flex;
    align-items: center;
    margin: 1rem;
    
`;

export const FormHorizontal = styled.form``;

export const SignInButtonWrapper = styled.div`
    //border: 1px solid;
    //align-self: 'stretch';
    //width: 150px;
    display: flex;
    align-items: center;
`;

export const SignInButton = styled(Button)`&&{
    color: ${colorQuinaryDark};
    border: 1px solid ${colorQuinaryDark}; 
    padding: 1rem 0;   
}`
