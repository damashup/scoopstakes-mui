import styled, {css} from 'styled-components';

import {colorGreyDark3, colorQuinaryDark} from '../../../page-styles/base-styles';




export const shrinkLabel = css`
    top: -10px;
    font-size: 8px;
    color: ${colorQuinaryDark};
`

export const FormInputDiv = styled.div`
    height: 100%;
    position: relative;
    margin: 5px 2px;
    input[type='password'] {
        letter-spacing: 0.3em;
      }
 
`;

export const FormInputInput = styled.input`
    background-color: white;
    color: ${colorQuinaryDark};
    padding: 10px 10px 10px 5px;
    //width: 95%
    width: 320px
    height: 50px;
    border: 1px solid ${colorGreyDark3};
    border-radius: 0;
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