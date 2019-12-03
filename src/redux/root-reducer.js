import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import directoryReducer from './directory/reducers/directory.reducer';
import resultReducer from './result/reducers/result.reducer';
import roundReducer from './round/reducers/round.reducer';
import signInMethodsReducer from './sign-in-methods/sign-in-methods.reducer';
import teamReducer from './team/reducers/team.reducer';
import userReducer from './user/reducers/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  directory: directoryReducer,
  result: resultReducer,
  round: roundReducer,
  signInMethods: signInMethodsReducer,
  team: teamReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
