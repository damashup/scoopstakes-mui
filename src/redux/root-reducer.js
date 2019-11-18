import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import directoryReducer from './directory/directory.reducer';
import userReducer from './user/reducers/user.reducer';
import teamReducer from './team/reducers/team.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  directory: directoryReducer,
  user: userReducer,
  team: teamReducer
});

export default persistReducer(persistConfig, rootReducer);
