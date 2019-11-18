import DirectoryActionTypes from '../../../types/directory.types';

const addNewDirectorySuccess = directory => ({
    type: DirectoryActionTypes.ADD_NEW_DIRECTORY_SUCCESS,
    payload: directory
});

export default addNewDirectorySuccess;