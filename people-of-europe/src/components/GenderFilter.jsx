import React from 'react';

function GenderFilter({ value, onChange }) {
  return (
    <label htmlFor="genderSelect">
      Gender{' '}
      <select
        id="genderSelect"
        name="genderFilter"
        value={value}
        onChange={onChange}
      >
        <option value="">&mdash;</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </label>
  );
}

export default GenderFilter;
