import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Moment from 'react-moment';
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';


const MatchItem = ({values, m, index}) => {
    const [checked, setChecked] = React.useState([0]);
    const labelId = `checkbox-list-label-${m}`; 


    const handleToggle = value => () => {
        console.log(value)
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        values.values.matchday.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        values.values.matchday.splice(currentIndex, 1);
        }
        
        console.log(values.values.matchday);
        
        setChecked(newChecked);
    };

    return (
     <>   

        <ListItem key={m.id} button onClick={handleToggle(m)}>
            <Grid container alignItems='center'>
                <Grid item xs={1}>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(m) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                    </ListItemIcon>    
                    {index+1}
                </Grid>
                <Grid item xs={1}>{m.id}</Grid>
                <Grid item xs={2}><Moment format="ddd DD MMM HH:mm">{m.utcDate}</Moment></Grid>
                <Grid item xs={2}>{m.competition.name}</Grid>
                <Grid item xs={2}>({m.homeTeam.id}) {m.homeTeam.name}</Grid>
                <Grid item xs={1}>{m.score.fullTime.homeTeam} - {m.score.fullTime.awayTeam}</Grid>
                <Grid item xs={2}>({m.awayTeam.id}) {m.awayTeam.name}</Grid>
            </Grid>
        </ListItem>

    </>
    );
  }

export default MatchItem
