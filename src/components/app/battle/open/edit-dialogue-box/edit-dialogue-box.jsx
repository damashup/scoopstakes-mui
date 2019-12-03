import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {EditButton} from './styles';

const EditDialogueButton = ({row}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <EditButton variant="contained" onClick={handleClickOpen}>
        Edit
      </EditButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">EDIT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit functionality will be added here....
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="team_name"
            label="Team Name"
            type="team_name"
            fullWidth
            variant="outlined"
            defaultValue={`${row.team_name}`}
          />
          <TextField
            autoFocus
            margin="dense"
            id="logo"
            label="LogoUrl"
            type="logo"
            variant="outlined"
            fullWidth
            defaultValue={`${row.logo}`}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditDialogueButton;
