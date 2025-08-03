import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

//自作フック
import {useCsrfToken} from "./hooks/useCsrfToken";

//ルート
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Logaut from './pages/Home/components/Logout/logout';

//css
import './App.css';


function App() {

  useCsrfToken();

  return (
    <BrowserRouter>
      <div className="container">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/Logaut' element={<Logaut />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


