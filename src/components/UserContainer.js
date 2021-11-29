import React from 'react';
import UserCard from './UserCard';

export default function UserContainer({ data }) {
  return (
    <div>
      {data.map((person) => {
        console.log(person);
        return <UserCard key={person.email} data={person} />;
      })}
    </div>
  );
}
