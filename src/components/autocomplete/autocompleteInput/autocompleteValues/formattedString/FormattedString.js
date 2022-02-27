import React from 'react';

export const FormattedString = ({ value, string }) => {
  let newString1 = value.substring(0, string.length);
  let newString2 = value.substring(string.length, value.length);

  return (
    <p>
      <b>{newString1}</b>
      {newString2}
    </p>
  );
};
