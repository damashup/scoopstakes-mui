import {firestore} from '../../firebase.utils';

const getAllRoundsDetail = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firestore.collection('rounds').orderBy('uid').onSnapshot(snapshot =>{
        unsubscribe();
        resolve(snapshot);
      }, reject)
    })
  }
export default getAllRoundsDetail;
  