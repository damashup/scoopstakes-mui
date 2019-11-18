import DirectoryActionTypes from '../../../types/directory.types';

const addNewDirectoryStart = directory => ({
    type: DirectoryActionTypes.ADD_NEW_DIRECTORY_START,
    payload: directory
});

export default  addNewDirectoryStart