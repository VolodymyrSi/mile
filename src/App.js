import { useState, useEffect, createContext } from 'react';
import fetchRandomUserData from './utils/fetchData';
import UserContainer from './components/UserContainer';
import FilterContainer from './components/FilterContainer';
import './styles/App.css';

export const Context = createContext();

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const localStorageGender = localStorage.getItem('gender');
    const localStorageNationality = localStorage.getItem('nationality');
    fetchRandomUserData(localStorageGender, localStorageNationality).then(
      (data) => {
        setUserData(data);
      }
    );
  }, []);

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
