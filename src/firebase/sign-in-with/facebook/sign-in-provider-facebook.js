import {auth} from '../../firebase.utils';
import {facebookProvider} from '../../providers';

facebookProvider.setCustomParameters({ prompt: 'select_account'});

const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default signInWithFacebook;