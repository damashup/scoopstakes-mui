import React from 'react'
import CustomDivider from '../../../../page-elements/divider/custom-divider';

import PlaySignInWithEmail from '../with-email';
import PlaySignInWithSocial from '../with-social';
import PageSubTitle from '../../../../page-elements/page-subtitle/page-subtitle.component';
import { Button } from '@material-ui/core';

const ModalSignInPlugin = () => (
    <div>
        <PageSubTitle subtitle="Sign In" />
        <PlaySignInWithEmail />

        <Button href='/play/signup'><PageSubTitle subtitle="Need an Account? Sign Up" /></Button>
        <CustomDivider>Or</CustomDivider>
        <PlaySignInWithSocial />
        
    </div>
)

export default ModalSignInPlugin;