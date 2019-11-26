import styled, {css} from 'styled-components';

import {colorGreyLight2, colorGreyDark3, colorBlack, colorQuinaryDark} from '../../../page-styles/base-styles';




export const shrinkLabel = css`
    top: -10px;
    font-size: 8px;
    color: ${colorQuinaryDark};
`

export const FormInputDiv = styled.div`
    position: relative;
    margin: 5px 2px;
    input[type='password'] {
        letter-spacing: 0.3em;
      }
 
`;

export const FormInputInput = styled.input`
    background: none;
    background-color: white;
    color: ${colorQuinaryDark};
    //font-size: 12px;
    padding: 10px 10px 10px 5px;
    display: inline;
    width: 200px;
    height: 40%;
    //max-width: 150px;
    //border: 1px solid ${colorGreyDark3};
    border-radius: 0;
    //border-bottom: 1px solid ${colorGreyDark3};
    margin-top: 25px 0;

    &:focus {
        outline: none;
    }

    &:focus ~ label {
        ${shrinkLabel}
    }

    
`;

export const FormInputLabel = styled.label`
    color: ${colorGreyDark3};
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 0px;
    transition: 300ms ease all;

    &.shrink {
        ${shrinkLabel}
      }

`;