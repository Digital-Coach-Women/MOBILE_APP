import { createStore, combineReducers } from 'redux';
import AuthReducer from './src/store/reduces/AuthReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
