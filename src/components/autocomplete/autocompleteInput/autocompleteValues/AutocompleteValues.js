import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import { FormattedString } from './formattedString/FormattedString';
// styles
import './autocompleteValuesStyles.css';
// utils
import { setValue, selectedStyle } from './AutocompleteValues.utils';
// actions
import * as actions from '../../../../redux/actions/users/usersAutocomplete/usersAutocompleteActions';

export const AutocompleteValues = ({ selectedIndex }) => {
  const dispatch = useDispatch();
  const autocomplete = useSelector((state) => state.usersAutocomplete);

  return (
    <>
      {autocomplete.showAutocomplete && (
        <div className="valuesContainer">
          {autocomplete.users.map((val, index) => {
            return (
              <div
                style={selectedStyle(index, selectedIndex)}
                key={val.id}
                className="value"
                data-id={val.id}
                data-username={val.username}
                onClick={(e) => setValue(e, dispatch, actions)}
              >
                <FormattedString
                  value={val.username}
                  string={autocomplete.valueToFilterBy}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
