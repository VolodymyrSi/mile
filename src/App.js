import { useState, useEffect } from 'react';
import './styles/App.css';
import fetchRandomUserData from './utils/fetchData';
import UserContainer from './components/UserContainer';
import FilterContainer from './components/FilterContainer';

function App() {
  const [userData, setUserData] = useState([]);
  const LocalStorageGender = localStorage.getItem('gender');
  const LocalStorageNationality = localStorage.getItem('nationality');

  useEffect(() => {
    fetchRandomUserData(LocalStorageGender, LocalStorageNationality).then(
      (data) => {
        setUserData(data);
      }
    );
  }, []);

  return (
    <div className="App">
      <FilterContainer />
      <UserContainer data={userData} />
    </div>
  );
}

export default App;
