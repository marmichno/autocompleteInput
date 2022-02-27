// on click set selected value and close list
export const setValue = (e, dispatch, actions) => {
  dispatch(
    actions.selectValue({
      id: e.currentTarget.dataset.id,
      username: e.currentTarget.dataset.username,
    })
  );
  dispatch(actions.showAutocomplete(false));
};

// change color if list element is selected
export const selectedStyle = (index, selectedIndex) => {
  return index === selectedIndex ? { backgroundColor: '#1E90FF' } : null;
};
