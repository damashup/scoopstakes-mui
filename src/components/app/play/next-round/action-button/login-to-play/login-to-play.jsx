import React from 'react'
import { Box, Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import LoginWithEmailPage from '../../../../sign-in/with-email/horizontal';
import LoginWithSocialHorizontal from '../../../../sign-in/with-social/horizontal'
import CustomDivider from '../../../../../page-elements/divider/custom-divider';

import {getModalStyle, useStyles, ModalDivPaper}  from './styles';



const LoginToPlayButton = () => {
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
            <Box m={2}><Button variant='outlined' m={2} fullWidth onClick={handleOpen}>Login to play</Button></Box>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <ModalDivPaper style={modalStyle} className={classes.paper}>
                    <LoginWithEmailPage />
                    <CustomDivider>Or</CustomDivider>
                    <LoginWithSocialHorizontal />
                </ModalDivPaper>
            </Modal>
        </div>
    )
}

export default LoginToPlayButton