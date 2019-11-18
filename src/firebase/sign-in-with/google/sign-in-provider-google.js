import {auth} from '../../firebase.utils';
import {googleProvider} from '../../providers';



googleProvider.setCustomParameters({ prompt: 'select_account'});

const signInWithGoogle = () => auth().signInWithPopup(googleProvider);

export default signInWithGoogle;