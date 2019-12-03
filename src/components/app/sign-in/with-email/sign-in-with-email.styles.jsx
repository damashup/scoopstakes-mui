import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {textBig, 
        textMedium,
        linkDefault,
        colorWhite} from '../../../page-styles/base-styles';



export const SignInWithEmailPasswordDiv = styled.div`

    
`;

export const SignInWithEmailPasswordHeading = styled.h2`
    font-size: 200%;
    ${textBig}
`

export const SignInTextDiv = styled.div`
    ${textMedium}
    
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
    border: 1px solid
`;

export const FormHorizontal = styled.form`
    //padding: 1rem;
    //display: inline;
    border: 1px solid
`;
