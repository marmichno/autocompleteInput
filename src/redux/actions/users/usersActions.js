import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './usersTypes';

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
    loading: true,
    users: [],
    error: '',
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    loading: false,
    users: users,
    error: '',
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    loading: false,
    users: [],
    error: error,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const request = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      const response = request.data;
      dispatch(fetchUsersSuccess(response));
    } catch (error) {
      dispatch(fetchUsersFailure('Something went wrong'));
    }
  };
};
