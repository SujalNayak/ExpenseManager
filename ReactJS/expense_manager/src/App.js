import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { AddUser } from './components/users/Adduser';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/AddUser" element={<AddUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
