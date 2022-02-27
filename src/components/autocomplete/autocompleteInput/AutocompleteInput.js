import React from 'react';
// hooks
import { useState } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
// actions
import * as actions from '../../../redux/actions/users/usersAutocomplete/usersAutocompleteActions';
// components
import { AutocompleteValues } from './autocompleteValues/AutocompleteValues';
// utils
import { handleKeyDown, handleChange } from './autocompleteInput.utils';
// styles
import './autocompleteInputStyles.css';

export const AutocompleteInput = () => {
  const dispatch = useDispatch();
  const autoComplete = useSelector((state) => state.usersAutocomplete);
  const users = useSelector((state) => state.users.users);
  const [userInput, setUserInput] = useState('');
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="autocompleteInputContainer">
        <input
          placeholder="type to search"
          value={userInput}
          onChange={(e) =>
            handleChange(
              e.target.value,
              setUserInput,
              setIndex,
              dispatch,
              actions,
              users
            )
          }
          onKeyDown={(e) =>
            handleKeyDown(
              e,
              autoComplete,
              index,
              setIndex,
              setUserInput,
              dispatch,
              actions
            )
          }
        />
        <AutocompleteValues selectedIndex={index} />
      </div>
      <button className="btnSubmit">Submit</button>
    </>
  );
};
