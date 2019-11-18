import auth from '../../firebase.utils';
import {twitterProvider} from '../../providers';

twitterProvider.setCustomParameters({ prompt: 'select_account'});

const signInWithTwitter = () => auth.signInWithPopup(twitterProvider);

export default signInWithTwitter;