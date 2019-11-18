import {firestore} from '../../firebase.utils';

const fetchAllDirectoryItems = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firestore.collection('directory').orderBy("order").onSnapshot(snapshot =>{
        unsubscribe();
        resolve(snapshot);
      }, reject)
    })
  }
export default fetchAllDirectoryItems;