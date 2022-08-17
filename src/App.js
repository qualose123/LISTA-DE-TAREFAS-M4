import Home from "./Views/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Details from "./Views/Details/Details";
import Edit from "./Views/Edit/Edit";
import { NotFound } from "./Views/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
