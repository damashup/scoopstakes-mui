import {firestore} from '../../firebase.utils';

const getAllTeamsDetail = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firestore.collection('teams').orderBy('createdAt', 'desc').onSnapshot(snapshot =>{
        unsubscribe();
        resolve(snapshot);
      }, reject)
    })
  }
export default getAllTeamsDetail;
  