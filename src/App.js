import { useState, useEffect, createContext } from 'react';
import './styles/App.css';
import fetchRandomUserData from './utils/fetchData';
import UserContainer from './components/UserContainer';
import FilterContainer from './components/FilterContainer';

export const Context = createContext();

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
  }, [LocalStorageGender, LocalStorageNationality]);

  return (
    <Context.Provider value={setUserData}>
      <div className="App">
        <FilterContainer />
        <UserContainer data={userData} />
      </div>
    </Context.Provider>
  );
}

export default App;
