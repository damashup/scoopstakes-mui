import DirectoryActionTypes from '../types/directory.types';

const INITIAL_STATE = {
    recentlyAddedDirectory: [],
    sections: null,
    isFetching: false,
    error: null
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case DirectoryActionTypes.ADD_NEW_DIRECTORY_SUCCESS: 
            return {
                ...state,
                recentlyAddedDirectory: [...state.recentlyAddedDirectory, action.payload],
                isFetching: false,
                error: null
            };
        
        case DirectoryActionTypes.FETCH_ALL_DIRECTORY_SUCCESS: 
            return {
                ...state,
                sections: action.payload,
                isFetching: false,
                error: null
            };    

        case DirectoryActionTypes.ADD_NEW_DIRECTORY_FAILURE:  
        case DirectoryActionTypes.FETCH_ALL_DIRECTORY_FAILURE:        
            return{
                ...state,
                error: action.payload,
                isFetching: false,
            };

        default:
            return state

    }
};

export default directoryReducer;