import {css} from 'styled-components';

import {
        buttonVanilla,
        colorBlack,
        colorNavyDark,
        colorGreyLight1, 
        colorGoogleRedDark, 
        colorGoogleRedShade, 
        colorFacebookBlueDark,
        colorFacebookBlueShade,
        colorTwitterBlue,
        colorTwitterBlueShade,
        colorWhite,
        signButtonWidthHeight
        } from '../../../../page-styles/base-styles';  

export const emailSignInStyles = css`
    ${signButtonWidthHeight}
    ${buttonVanilla}
`;

export const emailSignInHorizontalStyles = css`
    ${signButtonWidthHeight}
    ${buttonVanilla}
    width: 100px;
    border-radius: 20px;
    background-color: ${colorNavyDark};
`;  

export const facebookSignInStyles = css`
    ${signButtonWidthHeight}
    background-color: ${colorFacebookBlueShade};
    color: white;
    &:hover {
        background-color: ${colorFacebookBlueDark};
        border: none;
    }

`;

export const githubSignInStyles = css`
    ${signButtonWidthHeight}
    background-color: ${colorWhite};
    color: ${colorBlack};
    
    &:hover {
        background-color: ${colorGreyLight1};
        border: 1px solid ${colorBlack};
    }

`;

export const googleSignInStyles = css`
    ${signButtonWidthHeight}
    background-color: ${colorGoogleRedDark};
    color: white;
    &:hover {
        background-color: ${colorGoogleRedShade};
        border: none;
    }
`;


export const twitterSignInStyles = css`
    ${signButtonWidthHeight}
    background-color: ${colorTwitterBlueShade};
    color: white;
    &:hover {
        background-color: #0077B5;
        border: 1px solid ${colorTwitterBlue};
    }

`;

