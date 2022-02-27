import {
  FILTER_USERS,
  SELECT_VALUE,
  SHOW_AUTOCOMPLETE,
} from '../../../actions/users/usersAutocomplete/usersAutocompleteTypes';

const initialState = {
  showAutocomplete: false,
  users: [],
  valueToFilterBy: '',
  selectedValue: {},
};

const usersAutocompleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_USERS:
      const filterData = (users, string) => {
        if (string.length === 0) {
          return state;
        }

        const filteredArr = users.filter((val) => {
          const userName = val.username.toLowerCase();
          const stringToCompare = string.toLowerCase();
          return userName.startsWith(stringToCompare);
        });

        return filteredArr;
      };

      const filteredArr = filterData(action.usersArr, action.valueToFilterBy);

      return {
        ...state,
        users: filteredArr,
        valueToFilterBy: action.valueToFilterBy,
        showAutocomplete: action.valueToFilterBy.length > 0,
        selectedValue: {},
      };

    case SHOW_AUTOCOMPLETE:
      return {
        ...state,
        showAutocomplete: action.showAutocomplete,
      };

    case SELECT_VALUE:
      return {
        ...state,
        selectedValue: action.selectedValue,
      };

    default:
      return state;
  }
};

export default usersAutocompleteReducer;
