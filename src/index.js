import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BookDetail from './Components/BookDetail';
import Home from './Components/Home';
import Nav from './Components/Nav';
import ErrorPage from './Components/ErrorPage';
import AllBooks from './Components/AllBooks';
import Edit from './Components/Edit';


import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
            
            <Nav/>
      <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/addbook" element={<App/>}></Route>
            <Route path="/bookdetail/:id" element={<BookDetail/>}></Route>
            <Route path="/allbook" element={<AllBooks/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>

    </BrowserRouter>
    
  
);
