import React from 'react';
import { useState, useRef } from 'react';

const nationalities = [
  'AU',
  'BR',
  'CA',
  'CH',
  'DE',
  'DK',
  'ES',
  'FI',
  'FR',
  'GB',
  'IE',
  'IR',
  'NO',
  'NL',
  'NZ',
  'TR',
  'US'
];

export default function FilterContainer() {
  const inputGender = useRef(null);
  const inputNation = useRef(null);

  function handleChange(e) {
    e.preventDefault();
    console.log('submitted');
    // console.log(inputNation.current.options);
    const selectedNationsOptions = [...inputNation.current.options].filter(
      (opt) => {
        return opt.selected;
      }
    );
    const selectedNationsValues = selectedNationsOptions.map((option) => {
      return option.value;
    });
    // console.log(selectedNations)
    console.log(inputGender.current.value);
    localStorage.setItem('gender', inputGender.current.value);
    localStorage.setItem('nationality', selectedNationsValues.join(','));
  }
  return (
    <div>
      <fieldset>
        <label htmlFor="gender">Gender</label>
        <select id="gender" ref={inputGender}>
          <option value="all">all</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <label htmlFor="nationality">Nationality</label>
        <select
          id="nationality"
          name="nationality"
          multiple="multiple"
          ref={inputNation}
        >
          {nationalities.map((n) => {
            return (
              <option value={n} key={n}>
                {n}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Submit" onClick={handleChange} />
      </fieldset>
    </div>
  );
}
