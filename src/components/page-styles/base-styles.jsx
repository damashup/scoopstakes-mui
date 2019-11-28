import styled, {css} from 'styled-components';



//helpers

export const GrowDiv = styled.div`flex-grow: 1;`;

export const xs = css`0px`; // extra-small
export const sm = css`600px`; // small
export const md = css`960px`; // medium
export const lg = css`1280px`; // large
export const xl = css`1920px`; // extra large

export const blendMode1 = css`multiply`;
export const blendMode2 = css`color`;
export const blendMode3 = css`color-burn`;
export const blendMode4 = css`color-dodge`;
export const blendMode5 = css`darken`;
export const blendMode6 = css`difference`;
export const blendMode7 = css`exclusion`;
export const blendMode8 = css`hard-light`;
export const blendMode9 = css`hue`;
export const blendMode10 = css`luminosity`;
export const blendMode11 = css`overlay`;
export const blendMode12 = css`saturation`;
export const blendMode13 = css`screen`;
export const blendMode14 = css`soft-light`;

export const colorBlack = css`black`;
export const colorFacebookBlue = css`#3b5998`;
export const colorFacebookBlueDark = css`#1a2742`;
export const colorFacebookBlueShade = css`#2d4473`;
export const colorGoogleBlue = css`#4285f4`;
export const colorGoogleBlueShade = css`#357ae8`;
export const colorGoogleRed = css`#DB4437`;
export const colorGoogleRedDark = css`#dd5246`;
export const colorGoogleRedShade = css`#cb3225`;
export const colorGoogleYellow = css`#F4B400`;
export const colorGoogleGreen = css`#0F9D58`;
export const colorGoogleGreenShade = css`#0c7e47`;
export const colorGreyLight1 = css`#f4f2f2`;
export const colorGreyLight2 = css`#ece9e9`;
export const colorGreyLight3 = css`#ddd6d6`;
export const colorGreyDark1 = css`#54483A`;
export const colorGreyDark2 = css`#6D5D4B`;
export const colorGreyDark3 = css`#333`;
export const colorGreyDisabled = css`#cccccc`;
export const colorGreyDisabledText = css`#666666`;
export const colorGreyDisabledBorder = css`#999999`;

export const colorPrimary = css`#0606e2`;
export const colorPrimaryShade = css`#0505c1`;
export const colorPrimaryDark = css`#02024d`;

export const colorNavy = css`#0606e2`;
export const colorNavyShade = css`#0505c1`;
export const colorNavyDark = css`#02024d`;


export const colorTwitterBlue = css`#55acee`;
export const colorTwitterBlueShade = css`#1684d8`;
export const colorWhite = css`#fff;`;

export const colorQuinary = css`#55c57a`;
export const colorQuinaryLight = css`#0606e2`;
export const colorQuinaryDark = css`#02024d`;

export const colorGreen = css`#55c57a`;
export const colorGreenLight = css`#7ed56f`;
export const colorGreenDark = css`#28b485`;

export const colorQuaternaryLight = css`#ffb900`;
export const colorQuaternaryDark = css`#ff7830`;

// Button styles

export const submitButton = css`
background-color: ${colorGreenLight};
padding: 1rem;
color: ${colorWhite};
font-size: 110%;
text-transform: Capitalize;
`;

// page layout styles
export const PageDiv = styled.div`
    //background-image: linear-gradient(to right bottom, ${colorGreyLight1}, ${colorGreyLight3});
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`;


export const SmallTextContainer = styled.span`
  font-size: 60%;
`;

export const imageSignInWith = `
    max-height: 40px;
    max-width: 40px;
    //margin-right: 5px;
    margin: auto 5px auto 0;
`;

export const imageTeamLogoMedium = `
    max-height: 80px;
    max-width: 80px;
    text-align: center;
`;

export const linkDefault = css`
    text-decoration: none;
    cursor: pointer;
`;

export const textBig = css`
    font-size: 200%;
    font-weight: bolder;
`

export const textSmall = css`
    font-size: 50%;
    font-weight: bolder;
`
export const textMedium = css`
    font-size: 110%;
    font-weight: bolder;
`

export const buttonDisabled = css`
    opacity: 0.4;
    border: 1px solid ${colorGreyDisabledBorder};
    background-color: ${colorGreyDisabled};
    color: ${colorGreyDisabledText};
`

export const buttonVanilla = `
    justify-content: center;
    background-color: ${colorPrimary};
    color: white;
    &:hover {
        background-color: ${colorPrimaryShade};
        border: 1px solid ${colorPrimaryShade};
      }
    &:focus {outline:0;}  
`;

export const signButtonWidthHeight = css`
    line-height: 50px;
    width: 300px;
`;  

export const profileHeader = css`
    font-weight: bold;
    font-size: 250%;
    margin-top: 5rem;
    margin-bottom 1rem;

`;

export const profileKeyText = css`
    //font-weight: bold;
    text-transform: uppercase;
    color: ${colorGreyDark3}
`;

//export const gradientDarkBlue = css`linear-gradient(to right bottom, ${colorSecondary}, ${colorSecondaryDark})`;
export const gradientDarkBlue = css`rgba(6, 6, 226, 0.75), rgba(2, 2, 77, 0.75))`;
export const gradientOrange = css`#ffb900, #ff7730`;
export const gradientPurple1 = css`linear-gradient(to right bottom, #bf55ec, #d692f3)`;
export const gradientPurple2 = css`linear-gradient(to right bottom, #8e44ad, #d6b8e3)`;

export const pageTitleStyle = css`
    margin-top: 2rem;
    font-size: 3rem;
    margin-bottom: 2rem;
    color: ${colorPrimaryDark};
`;

export const pageSubTitleStyle = css`
    margin-top: 3rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${colorGreyDark1};
`;

export const pageNoticeStyle = css`
    font-size: 1.5rem;
    padding: 1rem;
    border: 0.2rem solid ${colorGreyLight2};
    background-color: ${colorGreyLight1};
    text-align: center;
    //width: 50%;
    color: ${colorPrimaryDark};
`;

export const summaryBox = css`
      width: 75rem;
      background-color: ${colorPrimary};

`;
