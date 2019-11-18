import DirectoryActionTypes from '../../../types/directory.types';

const fetchAllDirectorySuccess = directory => ({
    type: DirectoryActionTypes.FETCH_ALL_DIRECTORY_SUCCESS,
    payload: directory
});

export default fetchAllDirectorySuccess