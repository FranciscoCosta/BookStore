import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Books } from './pages/Books';
import { Add } from './pages/Add';
import { Update } from './pages/Update';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Books/>} />
        <Route path='/' element={<Add/>} />
        <Route path='/' element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
