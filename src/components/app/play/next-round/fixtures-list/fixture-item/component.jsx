import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TeamLogo from './team-logo';
import { Grid } from '@material-ui/core';
import {
        CompetitonText,
        FixtureGrid,
        FooterGrid,
        HeaderGrid,
        KOText,
        MainGrid,
        TeamGrid,
        TeamImage,
        TeamName,
        VersusText,
        } from './styles'

const FixtureItem = ({result}) => {
  
  const { competition, 
          defaultCompetition,
          koTime,
          defaultKoTime,
          homeTeam,
          awayTeam,
          homeTeamScore,
          awayTeamScore
        } = result
        
  const dummyLogo = 'https://cdn.steemitimages.com/DQmdgWoGR52RPjLUvbjB4Q2BGFrBWzBgKTWjDCqwWx8zyih/footballer_placeholder.png'
  return (

  
  <ListItem>
    
    <FixtureGrid container>

      <HeaderGrid 
        container 
        direction='row' 
        justify='space-between'
      >
        <CompetitonText variant='body1'>{competition ? competition : defaultCompetition}</CompetitonText>
        <KOText>{koTime ? koTime : defaultKoTime}</KOText>
      </HeaderGrid>

      <MainGrid  
        container 
        direction='row' 
        justify='space-between'
      >
        <Grid item xs={4}>
          <TeamGrid 
            container 
            direction='column' 
            alignItems='center'
            justify='space-between'
          >
              <TeamImage>
                <TeamLogo logoUrl={homeTeam.logo ? homeTeam.logo : dummyLogo} />
              </TeamImage>
              <TeamName>{homeTeam.name}</TeamName>
          </TeamGrid>
        </Grid>

        <Grid item xs={4}>
          <TeamGrid 
            container 
            direction='row' 
            alignItems='center'
            justify='space-between'
          >
              <VersusText>{homeTeamScore}</VersusText>
              <VersusText>v</VersusText>
              <VersusText>{awayTeamScore}</VersusText>
          </TeamGrid>
        </Grid>

        <Grid item xs={4}>
          <TeamGrid 
            container 
            direction='column' 
            alignItems='center'
            justify='space-between'
          >
              <TeamImage><TeamLogo logoUrl={awayTeam.logo ? awayTeam.logo : dummyLogo} /></TeamImage>
              <TeamName>{awayTeam.name}</TeamName>
          </TeamGrid>
        </Grid>
         
         
         
      </MainGrid>

      <FooterGrid 
        container 
        direction='row' 
        justify='space-between'
      >
        footer
      </FooterGrid>

    </FixtureGrid>

    {/* <Box display="flex" flexDirection='column' alignItems='center' justify='center' height="75%">
      <TeamLogo teamName={homeTeam} />
      <ListItemText primary={homeTeam} />
    </Box>
    

    
    <ListItemText primary="" />
    <ListItemText primary="vs" />
    <ListItemText primary="" /> 
    <ListItemText primary={awayTeam} />

    <TeamLogo teamName={awayTeam} /> */}
 
  </ListItem>
)}

export default FixtureItem;
