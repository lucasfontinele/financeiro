import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

const Reducers = combineReducers({
    Auth: AuthReducer
});

export default Reducers;