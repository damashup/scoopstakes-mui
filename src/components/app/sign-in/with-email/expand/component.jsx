import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { Grid, Button, Divider } from '@material-ui/core';
import {
        FixturesListBody,
        FixturesListHeaderBody,
        FixturesListHeaderGrid, 
        FixturesListHeaderItem} 
        from './styles';
import SignInWithEmailHorizontal from '../horizontal';

const NextRoundComponent = ({nextRound}) => {
  console.log(nextRound);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <FixturesListBody
      component="nav"
      aria-labelledby="nested-list-subheader"      
    >
      <Divider />
      <FixturesListHeaderBody onClick={handleClick}>
        <FixturesListHeaderGrid container justify='space-between'>
          <FixturesListHeaderItem item xs={4}>
            <SignInWithEmailHorizontal />
          </FixturesListHeaderItem>
          <FixturesListHeaderItem item xs={4}></FixturesListHeaderItem>
          <FixturesListHeaderItem item xs={4}>{open ? <ExpandLess /> : <ExpandMore />}</FixturesListHeaderItem>
        </FixturesListHeaderGrid>
      </FixturesListHeaderBody>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          social accounts....
          <ListItem>
            <ListItemText primary="Edit" />
          </ListItem>
        </List>
      </Collapse>
    </FixturesListBody>
  );
}

export default NextRoundComponent;
