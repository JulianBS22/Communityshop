import './App.css';
import AdvertsPage from './components/adverts/advertsPage.js';
import LoginPage from './components/auth/LoginPage';
import Button from './components/common/Button';
import { useState } from 'react';
//export default AdvertsPage;

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="App">
    {isLogged ?<AdvertsPage /> : <LoginPage onLogin={setIsLogged}/>}      
      <Button  variant="primary" onClick={event =>console.log(event)}>Sign Up!!!</Button>
      <Button  variant="secondary" onClick={event =>console.log(event)}>Login Here</Button>
    </div>
  );
}

export default App;
