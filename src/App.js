import Home from './Views/Home/Home';
import './App.css';
import {Routes,Route} from 'react-router-dom'
<<<<<<< HEAD
import Details from './Views/Details/Details';
import { NotFound } from './Views/NotFound/NotFound';
=======

>>>>>>> 4f16813d692758bcfb1623c63546e36fe2f85fbf
function App() {
  
  return (
    <div className="App">
        <h1> To Do List </h1>
<<<<<<< HEAD
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Details' element={<Details/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
      
=======
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
>>>>>>> 4f16813d692758bcfb1623c63546e36fe2f85fbf
    </div>
  );
}

export default App;
