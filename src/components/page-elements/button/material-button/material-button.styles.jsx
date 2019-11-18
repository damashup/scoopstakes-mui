import styled, {css} from 'styled-components';

import {
        colorPrimary,
        colorPrimaryDark,
        colorWhite,
        } from '../../../page-styles/base-styles';
import { Button } from '@material-ui/core';


const getBespokeButtonStyles = props => { 
    if(props.roundtype === 'round'){return selectedStyles;}
    if(props.seasontype === 'season'){return selectedStyles;}

    // Default
    return vanillaStyles;
}        

// Default styles
const vanillaStyles = css`
    color: ${colorPrimaryDark};
    border: 1px solid ${colorPrimaryDark};
`;

const selectedStyles = css`
    background-color: ${colorPrimary};
    color: ${colorWhite};
    border: 1px solid ${colorPrimaryDark};
`;

// Common Styles
export const MaterialButtonDiv = styled(Button)`&&{
    width: auto;
    margin: auto;
    //letter-spacing: 0.5px;
    //font-size: 1.5rem;
    text-transform: uppercase;
    //font-weight: bolder;
    cursor: pointer;
    display: flex;
    align-items: center;
    
    ${getBespokeButtonStyles}

}`;