import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';
import {colorQuinaryLight, colorPrimary} from '../../../../components/page-styles/base-styles';

export const HeaderLogo = styled.img`
    height: 4rem;
    width: auto; 
`;

export const TopbarAppBar = styled(AppBar)`&&{
    
}`;

export const TopbarToolbar = styled(Toolbar)`&&{
    // background-color: ${colorQuinaryLight};
    background-color: ${colorPrimary};
}`;
