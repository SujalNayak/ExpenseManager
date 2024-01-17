import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { AddUser } from './components/users/Adduser';
import { Route, Routes } from 'react-router-dom';
import { WdywExpense } from './components/expenses/WdywExpense';
import { AddExpenses } from './components/expenses/AddExpenses';
import { ListExpenses } from './components/expenses/ListExpenses';
import { WdywUser } from './components/users/WdywUser';
import { ListUser } from './components/users/ListUser';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/AddUser" element={<AddUser/>}></Route>
        <Route path='/WdywExpense' element={<WdywExpense/>}></Route>
        <Route path='/AddExpenses' element={<AddExpenses/>}></Route>
        <Route path='/ListUser' element={<ListUser/>}></Route>
        <Route path='/ListExpenses' element={<ListExpenses/>}></Route>
        <Route path='/WdywUser' element={<WdywUser/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
