import './App.css';
import AdvertsPage from './components/adverts/advertsPage.js';
import LoginPage from './components/auth/LoginPage';
import Button from './components/common/Button';
import SignupPage from './components/auth/SignupPage';
import { useState } from 'react';
import { Route,Routes, Navigate } from 'react-router-dom';
//export default AdvertsPage;

const handleLogin =()=> {
  setIsLogged(true);
};

const handleLogout =()=> {
  setIsLogged(false);
};

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
      <Routes>
          <Route path='/login' element={<LoginPage onLogin={handleLogin}/>}  />
          <Route path='/adverts' element={<AdvertsPage isLogged = {isLogged}/>} />
          <Route path='/adverts/new' element= {<NewAdvertPage onLogout = {handleLogout} isLogged={isLogged}/>} />
          <Route path='/' element= {<Navigate to ='/adverts'/>}/>
          <Route path='*' element= {<div>404 | Not Found</div>} />
      </Routes>
   
    </div>
  );
}

export default App;
