import {firestore} from '../../firebase.utils';

const fetchSingleRound = roundId => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firestore.collection('rounds').where('uid', '==', roundId).limit(1).onSnapshot(snapshot =>{  
        console.log(unsubscribe);
        unsubscribe();
        resolve(snapshot);
      }, reject)
    })
  }
export default fetchSingleRound;