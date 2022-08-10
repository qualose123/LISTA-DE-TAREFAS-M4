import Home from './Views/Home/Home';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Details from './Views/Details/Details';
import { NotFound } from './Views/NotFound/NotFound';



function App() {
  
  return (
    <div className="App">
        <h1> To Do List </h1>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Details' element={<Details/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
      

    </div>
  );
}

export default App;
