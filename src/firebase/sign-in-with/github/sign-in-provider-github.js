import auth from '../../firebase.utils';
import {githubProvider} from '../../providers';

githubProvider.setCustomParameters({ prompt: 'select_account'});

const signInWithGithub = () => auth.signInWithPopup(githubProvider);

export default signInWithGithub;