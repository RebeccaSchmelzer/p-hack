import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import CreateProfile from './pages/CreateProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Welcome />} />
        <Route path='/create-profile' exact element={<CreateProfile />} />
        <Route path='/login' exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
