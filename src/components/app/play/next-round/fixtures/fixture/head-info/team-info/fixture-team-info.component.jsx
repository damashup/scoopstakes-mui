import React from 'react';

import { Avatar, Box, Grid, Typography } from '@material-ui/core';

const TeamInfo = ({team}) => (

    <Grid 
      container 
      direction='column' 
      justify='center' 
      alignItems='center' 
      spacing={1}
      >
        <Avatar src={team.logo}/>  
        <Box 
          component="div" 
          textOverflow="ellipsis"
          >
            <Typography
              component="span"
              variant="h6"
              color="textPrimary"
              >
            {team.name}
            </Typography>
          </Box>
    </Grid>

             

  );

export default TeamInfo;
