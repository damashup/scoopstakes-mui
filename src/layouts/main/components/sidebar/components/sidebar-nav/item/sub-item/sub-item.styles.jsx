import styled from 'styled-components'
import { List, ListItemText, ListItem} from '@material-ui/core';
import {colorWhite, colorGreyLight2, colorPrimaryDark } from '../../../../../../../../components/page-styles/base-styles';

export const SubListItem = styled(ListItem)`&&{
  border: 1px solid ${colorPrimaryDark};
  //padding: 1rem;
  font-size: 150%;
  margin-bottom: 1rem;
  color: ${colorPrimaryDark};
}`;
