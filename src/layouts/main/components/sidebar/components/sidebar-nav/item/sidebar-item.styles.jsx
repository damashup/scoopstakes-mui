import styled from 'styled-components'
import { List, ListItemText, ListItem} from '@material-ui/core';
import {colorWhite, colorGreyLight2, colorQuinaryLight, colorQuaternaryDark } from '../../../../../../../components/page-styles/base-styles';

export const SidebarListItem = styled(ListItem)`&&{
  background-color: ${colorQuinaryLight};
  //border: 1px solid ${colorWhite};
  color: ${colorWhite};
  font-size: 150%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}`;

export const SidebarTextDiv = styled.div`&&{
  color: ${colorWhite};

}`;

export const SidebarSubList = styled(List)`&&{
  &:last-child { margin-top: 1rem;}
}`;