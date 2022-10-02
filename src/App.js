
import './App.css';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <NavBar />
        <News />
      </div>
    </div>
  );
}

export default App;
