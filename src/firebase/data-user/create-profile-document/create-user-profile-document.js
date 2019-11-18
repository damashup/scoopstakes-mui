import {firestore} from '../../firebase.utils';

const defaultUserRef = (userAuth)  => {
    return firestore.doc(`users/${userAuth.uid}`);}

const createUserProfileDocument = async (userAuth, additionalData, userRef=defaultUserRef(userAuth)) => {
  if (!userAuth) return;
  
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export default createUserProfileDocument;

