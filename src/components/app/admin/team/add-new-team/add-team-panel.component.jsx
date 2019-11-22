import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import AddTeamInput from './add-team-input';
import {AddTeamExpansionPanelSummary} from './add-team-panel.styles';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TeamList from '../manage-existing-team';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function AddTeamPanel() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AddTeamExpansionPanelSummary
          expandIcon={<AddCircleOutlineIcon fontSize='large' />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          Add New Team
        </AddTeamExpansionPanelSummary>
        <ExpansionPanelDetails>
 
            <AddTeamInput />

          
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AddTeamExpansionPanelSummary
          expandIcon={<EditIcon fontSize='large' />} 
          aria-controls="panel2d-content" 
          id="panel2d-header"
        >
          Manage Existing Team
        </AddTeamExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TeamList />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      
    </div>
  );
}
