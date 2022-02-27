import {
  FILTER_USERS,
  SELECT_VALUE,
  SHOW_AUTOCOMPLETE,
} from './usersAutocompleteTypes';

const filterUsers = (usersArr, string) => {
  return {
    type: FILTER_USERS,
    usersArr: usersArr,
    valueToFilterBy: string,
  };
};

const showAutocomplete = (boolean) => {
  return {
    type: SHOW_AUTOCOMPLETE,
    showAutocomplete: boolean,
  };
};

const selectValue = (value) => {
  return {
    type: SELECT_VALUE,
    selectedValue: value,
  };
};

export { filterUsers, showAutocomplete, selectValue };
