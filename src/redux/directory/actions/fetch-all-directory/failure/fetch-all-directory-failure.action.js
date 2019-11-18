import DirectoryActionTypes from '../../../types/directory.types';

const fetchAllDirectoryFailure = error => {
    
    return ({
        type: DirectoryActionTypes.FETCH_ALL_DIRECTORY_FAILURE,
        payload: error})
};


export default fetchAllDirectoryFailure;