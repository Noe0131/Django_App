import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Login from './pages/Login/Login';
import Hoem from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Hoem />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
