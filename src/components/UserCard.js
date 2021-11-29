import React from 'react';
import { FormattedDate } from '../utils/dateHelper';

export default function UserCard({ data }) {
  const { gender, name, email, dob, picture, nat } = data;
  return (
    <div className="gridItem">
      <img src={picture.large} alt="userPic" />
      <p>{`${name.first} ${name.last}`}</p>
      <p>{gender}</p>
      <p>{email}</p>
      <p>{FormattedDate(dob.date)}</p>
      {localStorage.getItem('nationality') && <p>{nat}</p>}
    </div>
  );
}
