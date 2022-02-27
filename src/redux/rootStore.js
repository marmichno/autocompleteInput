// redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// reducers
import usersReducer from './reducers/users/usersReducer';
import usersAutocompleteReducer from './reducers/users/usersAutocomplete/usersAutocompleteReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  usersAutocomplete: usersAutocompleteReducer,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
