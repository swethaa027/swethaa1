import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/Login'element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
