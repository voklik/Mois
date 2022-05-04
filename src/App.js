import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Home from './Home'
import Layout from './components/Layout';
import Contact from "./Contact";
import Users from "./admin/user/Users";
import UserDetail from "./admin/user/UserDetail";
import Destinations from "./admin/destinations/Destinations";
import DestinationCreate from "./admin/destinations/DestinationCreate";
import DestinationDetail from "./admin/destinations/DestinationDetail";
import OfferCreate from "./admin/offers/OfferCreate";
import OfferDetail from "./OfferDetail";
import MyOrders from "./MyOrders";
import Offers from "./Offers";

const App = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/" element={<Layout/>}>
                        <Route exact path="" element={<Home/>}/>
                        <Route path="index" element={<Home/>}/>
                        <Route path="offers" element={<Offers/>}/>
                        <Route path="offers/:id" element={<OfferDetail/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="my-orders" element={<MyOrders/>}/>
                        <Route path="admin/users" element={<Users/>}/>
                        <Route path="admin/users/:id" element={<UserDetail/>}/>
                        <Route path="admin/offers/create" element={<OfferCreate/>}/>
                        <Route path="admin/destinations/" element={<Destinations/>}/>
                        <Route path="admin/destinations/:id" element={<DestinationDetail/>}/>
                        <Route path="admin/destinations/create" element={<DestinationCreate/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>);
}

export default App;