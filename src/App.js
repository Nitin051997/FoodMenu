import './App.css';
import Lander from './Components/App/Lander';
import AppNavBar from './Components/NavBar';

function App() {

  return (
    <div className="App app-container">
      <AppNavBar />
      <Lander />
    </div>
  );
}

export default App;
