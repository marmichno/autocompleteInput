export const handleKeyDown = (
  e,
  autoComplete,
  index,
  setIndex,
  setUserInput,
  dispatch,
  actions
) => {
  if (autoComplete.showAutocomplete) {
    // on arrow down change index to index + 1
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (autoComplete.users.length - 1 === index) {
        setIndex(0);
        return;
      }
      setIndex(index + 1);
      // on arrow down change index to index -1
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (index === 0) {
        setIndex(autoComplete.users.length - 1);
        return;
      }
      setIndex(index - 1);
      // on enter select value
    } else if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(
        actions.selectValue({
          id: autoComplete.users[index].id,
          username: autoComplete.users[index].username,
        })
      );
      dispatch(actions.showAutocomplete(false));
      setUserInput(autoComplete.users[index].username);
    }
  }
};

export const handleChange = (
  string,
  setUserInput,
  setIndex,
  dispatch,
  actions,
  users
) => {
  setUserInput(string);
  setIndex(0);
  dispatch(actions.selectValue({}));
  dispatch(actions.filterUsers(users, string));
};
