import {firestore} from '../../firebase.utils';

const getAllTeamsDetail = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firestore.collection('teams').orderBy('team_name', 'asc').onSnapshot(snapshot =>{
        unsubscribe();
        resolve(snapshot);
      }, reject)
    })
  }
export default getAllTeamsDetail;
  