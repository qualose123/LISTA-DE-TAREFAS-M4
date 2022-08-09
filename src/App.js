import Home from './Views/Home/Home';
import './App.css';
import {Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
        <h1> To Do List </h1>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
