import DirectoryActionTypes from '../../../types/directory.types';



const addNewDirectoryFailure = error => {
    
    return ({
        type: DirectoryActionTypes.ADD_NEW_DIRECTORY_FAILURE,
        payload: error})
};


export default addNewDirectoryFailure;