import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import {colorWhite, colorPrimary } from '../../../../components/page-styles/base-styles';



export const SectionTitleDiv = styled(Grid)`&&{
    background-color: ${colorPrimary};
    //border: 1px solid ${colorWhite};
    color: ${colorWhite};
    font-size: 300%;
    padding: 1rem;
}`
