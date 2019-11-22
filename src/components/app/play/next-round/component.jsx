import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FixturesList from './fixtures-list';
import { Grid } from '@material-ui/core';

const NextRoundComponent = ({nextRound}) => {
  console.log(nextRound);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"      
    >
      <ListItem button onClick={handleClick}>
        <Grid container justify='space-between'>
          <div>Next Round</div>
          <div>Round {nextRound.round_no}</div>
          <div>{open ? <ExpandLess /> : <ExpandMore />}</div>
        </Grid>
        
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <FixturesList results={nextRound.results}/>
          <ListItem>
            <ListItemText primary="Edit" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default NextRoundComponent;
