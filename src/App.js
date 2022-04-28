import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Home from './Home'
import Layout from './components/Layout';
import Contact from "./Contact";

const App = () => {

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/" element={<Layout/>}>
                        <Route exact path="" element={<Home/>}/>
                        <Route path="index" element={<Home/>}/>
                        <Route path="contact" element={<Contact/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>);


}

export default App;