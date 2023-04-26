import './App.css';
import AdvertsPage from './components/adverts/advertsPage.js';
import Button from './components/common/Button';

//export default AdvertsPage;

function App() {
  return (
    <div className="App">
      <AdvertsPage></AdvertsPage>
      <Button  variant="primary" onClick={event =>console.log(event)}>Sign Up!!!</Button>
      <Button  variant="secondary" onClick={event =>console.log(event)}>Login Here</Button>
    </div>
  );
}

export default App;
