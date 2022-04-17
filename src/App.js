import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Home from './Home'
import Layout from './components/Layout';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/" element={<Layout/>}>
                        <Route path="" element={<Home/>}/>
                        <Route path="index" element={<Home/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>);
    }

}

export default App;