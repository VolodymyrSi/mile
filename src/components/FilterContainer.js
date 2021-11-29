import React, { useRef, useContext } from 'react';
import { Context } from '../App';
import fetchRandomUserData from '../utils/fetchData';

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
  const setUserData = useContext(Context);

  const selectedGender = localStorage.getItem('gender');

  const inputGender = useRef(null);
  const inputNation = useRef(null);

  function handleChange(e) {
    e.preventDefault();
    const selectedNationsOptions = [...inputNation.current.options].filter(
      (opt) => opt.selected
    );
    const selectedNationsValues = selectedNationsOptions.map(
      (option) => option.value
    );

    localStorage.setItem('gender', inputGender.current.value);
    localStorage.setItem('nationality', selectedNationsValues.join(','));

    fetchRandomUserData(
      inputGender.current.value,
      selectedNationsValues.join(',')
    ).then((data) => {
      setUserData(data);
    });
  }
  return (
    <fieldset className="formContainer">
      <legend>Filter options</legend>
      <label htmlFor="gender">Gender</label>
      <select ref={inputGender}>
        <option value="all" selected={selectedGender === 'all'}>
          all
        </option>
        <option value="male" selected={selectedGender === 'male'}>
          male
        </option>
        <option value="female" selected={selectedGender === 'female'}>
          female
        </option>
      </select>
      <label htmlFor="nationality">Nationality</label>
      <select name="nationality" multiple="multiple" size="5" ref={inputNation}>
        {nationalities.map((nationality) => {
          return (
            <option
              value={nationality}
              key={nationality}
              selected={localStorage
                .getItem('nationality')
                .split(',')
                .includes(nationality)}
            >
              {nationality}
            </option>
          );
        })}
      </select>
      <input type="submit" value="Submit" onClick={handleChange} />
    </fieldset>
  );
}
