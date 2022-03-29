import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="App">
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
