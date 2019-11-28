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
            id="round_no"
            label="Round Number"
            type="text" 
            variant="outlined"
            fullWidth
            defaultValue={`${row.round_no}`}
          />
          <TextField
            autoFocus
            margin="dense"
            id="deadline_time"
            label="deadline_time"
            type="datetime-local"
            variant="outlined"
            fullWidth
            defaultValue={`${row.deadline_time}`}
          />

          <TextField
            autoFocus
            margin="dense"
            id="first_ko_time"
            label="first_ko_time"
            type="datetime-local"
            variant="outlined"
            fullWidth
            defaultValue={`${row.first_ko_time}`}
          />

          <TextField
            autoFocus
            margin="dense"
            id="results"
            label="results"
            type="text"
            variant="outlined"
            fullWidth
            defaultValue={`${row.first_ko_time}`}
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
