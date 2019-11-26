import React from 'react';
import {Grid, List, ListItem, ListItemAvatar, Divider, Typography} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {StepAvatar, SectionTitleTypography} from './styles';

const HowToStep = ({step}) => {
    const {id, title, description} = step
    return (
    <>

    <List>
      <ListItem alignItems="flex-start" key={id}>

        <ListItemAvatar>
          <StepAvatar>{id}</StepAvatar>
        </ListItemAvatar>
            <Grid container direction='column'>

                <Grid container direction='row'>
                    <Grid item xs={12}>
                        <Grid container direction='row' alignItems='center'>
                                <SectionTitleTypography
                                component="span"
                                variant="h4"
                                color="textPrimary"
                                >
                                {title}
                                
                                </SectionTitleTypography>
                                {/* &nbsp;<ArrowForwardIcon fontSize='large' /> */}
                        </Grid>
                    </Grid>
                
                    <Grid item xs={12}>
                        <Typography
                        component="span"
                        variant="h5"
                        color="textPrimary"
                        >
                        {description}
                        </Typography>
                    </Grid>

                </Grid>

            </Grid>

      </ListItem>

      
    </List>  
    {id === 3 
            ? (
            <>
                <Grid item xs={12}><Divider /></Grid>
                <Grid item xs={12}>&nbsp;</Grid>
                <Grid item xs={12}>
                    <Typography
                    component="span"
                    variant="h5"
                    color="textPrimary"
                    >
                    Want more?
                    </Typography>
                    
                </Grid>
            </>)
            : '' 
            }
    </>
)}


export default HowToStep;
