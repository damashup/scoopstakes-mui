import styled from 'styled-components'
import { ListItemText, ListItem} from '@material-ui/core';

export const SidebarListItem = styled(ListItem)`&&{
  padding: 1rem;
  font-size: 150%;
  //font-weight: bold;
  display: flex;
  justify-content: space-between;
}`;

export const SidebarListItemText = styled(ListItemText)`&&{
  //font-weight: bold;
}`;