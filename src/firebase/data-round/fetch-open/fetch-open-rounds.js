import {firestore} from '../../firebase.utils';

const fetchOpenRoundsDetail = () => {
    return new Promise((resolve, reject) => {
      // const unsubscribe = firestore.collection('rounds').orderBy('round_status', 'desc').orderBy('deadline_time', 'desc').limit(10).onSnapshot(snapshot =>{
      const unsubscribe = firestore.collection('rounds').where('round_status', '==', 'open').orderBy('deadline_time', 'desc').limit(1).onSnapshot(snapshot =>{  
        console.log(unsubscribe);
        unsubscribe();
        resolve(snapshot);
      }, reject)
    })
  }
export default fetchOpenRoundsDetail;