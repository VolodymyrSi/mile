import axios from 'axios';

const url = 'https://randomuser.me/api/';
const defalutUrl = `${url}?results=15&inc=gender,name,nat,dob,picture,email`;
let gender = '';
let nationality = '';

export default function fetchRandomUserData(
  LocalStorageGender,
  LocalStorageNationality
) {
  //   console.log(LocalStorageGender, LocalStorageNationality);
  if (LocalStorageGender) {
    gender = `&gender=${LocalStorageGender}`;
  }
  if (LocalStorageNationality) {
    nationality = `&nat=${LocalStorageNationality}`;
  }
  console.log(defalutUrl + gender + nationality)
  return axios
    .get(defalutUrl + gender + nationality)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
}
