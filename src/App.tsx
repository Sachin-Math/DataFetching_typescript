import React from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import UserList from './modules/users/pages/UserList';

const App :React.FC=()=> {
  return (
    <div className="App">
      <NavBar heading='useEffect() Hook'/>
      <UserList/>
    </div>
  );
}

export default App;
