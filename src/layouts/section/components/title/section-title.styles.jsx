import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {colorWhite, colorGreyLight2, colorPrimaryDark } from '../../../../components/page-styles/base-styles';



export const SectionTitleDiv = styled(Grid)`&&{
    background-color: ${colorPrimaryDark};
    //border: 1px solid ${colorWhite};
    color: ${colorWhite};
    font-size: 300%;
    padding: 1rem;
}`
