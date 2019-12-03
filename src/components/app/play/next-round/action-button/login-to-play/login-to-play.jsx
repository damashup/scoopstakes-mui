import React from 'react'
import { Box} from '@material-ui/core'
import Modal from '@material-ui/core/Modal';

import {getModalStyle, ModalDivPaper, SignInButton}  from './styles';
import ModalSignInPlugin from '../../../play-signin/modal';



const LoginToPlayButton = () => {
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
            <Box m={2}>
                <SignInButton m={2} fullWidth onClick={handleOpen}>
                    Login to play
                </SignInButton>
            </Box>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <ModalDivPaper style={modalStyle}>
                    <ModalSignInPlugin />
                </ModalDivPaper>
            </Modal>
        </div>
    )
}

export default LoginToPlayButton