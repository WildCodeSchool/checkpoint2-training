import React from 'react';

function NatFilter({ value, onChange }) {
  return (
    <label htmlFor="natSelect">
      Nationality{' '}
      <select
        id="natSelect"
        name="natFilter"
        value={value}
        onChange={onChange}
      >
        <option value="">&mdash;</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="British">British</option>
        <option value="German">German</option>
      </select>
    </label>
  );
}

export default NatFilter;
