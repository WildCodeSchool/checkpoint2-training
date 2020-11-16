import React from 'react';

function NameFilter({ value, onChange }) {
  return (
    <label htmlFor="nameInput">
      Name{' '}
      <input
        id="nameInput"
        name="nameFilter"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default NameFilter;
