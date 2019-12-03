import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
        colorGreyLight1,
        textBig, 
        textMedium,
        linkDefault} from '../../../page-styles/base-styles';


export const SignUpWithEmailPasswordDiv = styled.div`
//    background-color: ${colorGreyLight1};
//    padding: 1rem;
//    border-radius: 20px;
    
`;        

export const SignUpWithEmailPasswordHeading = styled.h2`
    font-size: 200%;
    ${textBig}
`

export const SignUpTextDiv = styled.div`
    ${textMedium}
    padding-top: 2rem;
`;

export const SignInLink = styled(Link)`
    font-weight: bolder;
    ${linkDefault}
`;