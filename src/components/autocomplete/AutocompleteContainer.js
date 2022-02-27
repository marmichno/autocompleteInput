import React from 'react';
// styles
import './AutocompleteContainerStyles.css';
// hooks
import { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// actions
import { fetchUsers } from '../../redux/actions/users/usersActions';
import * as actions from '../../redux/actions/users/usersAutocomplete/usersAutocompleteActions';
// components
import { AutocompleteInput } from './autocompleteInput/AutocompleteInput';

export const AutocompleteContainer = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // hide autocomplete after clicking anywhere but input and button
  const closeAutocomplete = () => {
    dispatch(actions.showAutocomplete(false));
  };

  return (
    <div onClick={closeAutocomplete} className="mainContainer">
      {usersState.loading && <h2>Loading...</h2>}
      {usersState.error && <h2>Something went wrong</h2>}
      {usersState.users.length > 0 && (
        <AutocompleteInput users={usersState.users} />
      )}
    </div>
  );
};
