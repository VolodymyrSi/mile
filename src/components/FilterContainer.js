import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
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

  const inputGender = useRef(null);
  const inputNation = useRef(null);

  function handleChange(e) {
    e.preventDefault();
    const selectedNationsOptions = [...inputNation.current.options].filter(
      (opt) => {
        return opt.selected;
      }
    );
    const selectedNationsValues = selectedNationsOptions.map((option) => {
      return option.value;
    });
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
      <select id="gender" ref={inputGender}>
        <option value="all" seleted={localStorage.getItem('gender') === 'all'}>
          all
        </option>
        <option
          value="male"
          selected={localStorage.getItem('gender') === 'male'}
        >
          male
        </option>
        <option
          value="female"
          selected={localStorage.getItem('gender') === 'female'}
        >
          female
        </option>
      </select>
      <label htmlFor="nationality">Nationality</label>
      <select
        id="nationality"
        name="nationality"
        multiple="multiple"
        size="5"
        ref={inputNation}
      >
        {nationalities.map((n) => {
          return (
            <option
              value={n}
              key={n}
              selected={localStorage
                .getItem('nationality')
                .split(',')
                .includes(n)}
            >
              {n}
            </option>
          );
        })}
      </select>
      <input type="submit" value="Submit" onClick={handleChange} />
    </fieldset>
  );
}
