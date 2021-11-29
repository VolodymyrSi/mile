import React from 'react';
import { FormattedDate } from '../utils/dateHelper';

export default function UserCard({ data }) {
  const { gender, name, email, dob, picture } = data;
  return (
    <div>
      <img src={picture.medium} alt="userPic" />
      <p>{`${name.first} ${name.last}`}</p>
      <p>{gender}</p>
      <p>{email}</p>
      <p>{FormattedDate(dob.date)}</p>
    </div>
  );
}
