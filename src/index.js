import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './Register'
import { Inicio } from './Inicio/index';
import { Perfil } from './Perfil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
     
        <Routes>
            <Route path="/config" element={<App />}></Route>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route path='/perfil' element={<Perfil/>}></Route>
        </Routes>
    </Router>
);

