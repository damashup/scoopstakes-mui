import firebase from 'firebase/app';

const githubProvider = new firebase.auth.GithubAuthProvider();

export default githubProvider;