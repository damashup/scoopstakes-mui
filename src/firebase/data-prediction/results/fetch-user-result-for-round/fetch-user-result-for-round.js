import {firestore} from '../../../firebase.utils';

const fetchUserResultForRound = (user, round) => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firestore.collection('predictions').where("user.name", "==", user).where("round", "==", round).onSnapshot(snapshot =>{
        unsubscribe();
        resolve(snapshot);
      }, reject)
    })
  }
export default fetchUserResultForRound;