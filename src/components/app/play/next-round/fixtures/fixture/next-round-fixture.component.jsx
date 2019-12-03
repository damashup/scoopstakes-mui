import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
        FixturesListBody,
        FixturesListHeaderBody,
        FixturesListHeaderGrid, 
        } 
        from './styles';
import HeaderInfo from './head-info';
import MoreInfo from './more-info';
import { Grid, Divider } from '@material-ui/core';

const NextRoundComponent = ({result}) => {
  console.log(result)
  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <FixturesListBody
      component="nav"
      aria-labelledby="nested-list-subheader"      
    >
      <FixturesListHeaderBody onClick={handleClick}>

      <FixturesListHeaderGrid 
          container alignItems='center' 
          justify='space-between'
        >

        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <HeaderInfo result={result} />
            </Grid>
          <Grid item xs={1}>
            {open ? <ExpandLess /> : <ExpandMore />}  
          </Grid>
        </Grid>   
      </FixturesListHeaderGrid>

      </FixturesListHeaderBody>

      <Collapse in={open} timeout="auto" unmountOnExit>
      <Grid container>
          <Divider />
          <MoreInfo result={result} />
      </Grid> 

      </Collapse>
    </FixturesListBody>
  );
}

export default NextRoundComponent;
