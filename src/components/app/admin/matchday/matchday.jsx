import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {matchdayTwo} from './data';
import PageSubTitle from '../../../page-elements/page-subtitle/page-subtitle.component';
import Moment from 'react-moment';
import { Grid } from '@material-ui/core';
import MatchItem from './match-item/match-item.component';

const MatchDay = ({values}) => {

    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
    
    const dateTitle = <Moment format="ddd DD MMM">{matchdayTwo.filters.dateFrom}</Moment>;
    const countTitle = `(${matchdayTwo.count})`;
    const matches = matchdayTwo.matches;
    return (
     <>   
        <List>
            <ListItem button onClick={handleClick}>
                <Grid container justify='space-between'>
                    <ListItemIcon>
                        <PageSubTitle subtitle={dateTitle} />
                    </ListItemIcon>
                    <PageSubTitle subtitle={dateTitle} />
                    <PageSubTitle subtitle={countTitle} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </Grid>  
            </ListItem>
           
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                {matches.map((m, index) => {

                    return (
                        <MatchItem values={values} m={m} index={index}/>
                )})}

            
                </List>
            </Collapse>
        </List>

    </>
    );
  }

export default MatchDay
