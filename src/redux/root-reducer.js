import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import userReducer from './user/reducers/user.reducer';
import teamReducer from './team/reducers/team.reducer';
import directoryReducer from './directory/reducers/directory.reducer';
import roundReducer from './round/reducers/round.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  user: userReducer,
  team: teamReducer,
  directory: directoryReducer,
  round: roundReducer,
});

export default persistReducer(persistConfig, rootReducer);
