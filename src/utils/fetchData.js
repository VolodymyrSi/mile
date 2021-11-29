import axios from 'axios';

const url = 'https://randomuser.me/api/';
const defalutUrl = `${url}?results=15&inc=gender,name,nat,dob,picture,email`;

export default function fetchRandomUserData(
  localStorageGender,
  localStorageNationality
) {
  let gender = '';
  let nationality = '';

  if (localStorageGender) {
    gender = `&gender=${localStorageGender}`;
  }
  if (localStorageNationality) {
    nationality = `&nat=${localStorageNationality}`;
  }

  return axios
    .get(`${defalutUrl}${gender}${nationality}`)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
}
