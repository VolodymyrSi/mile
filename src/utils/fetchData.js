import axios from 'axios';

const url = 'https://randomuser.me/api/';

export default function fetchRandomUserData(
  LocalStorageGender,
  LocalStorageNationality
) {
    console.log(LocalStorageGender, LocalStorageNationality)
  return axios
    .get(`${url}?results=15&inc=gender,name,nat,dob,picture,email`)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
}
