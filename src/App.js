import React, {Component} from "react";
import Header from './components/Header'
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jewellery from "./pages/Jewellery";
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/jewellery' element={<Jewellery/>}/>
                    <Route path='/cart' element={<ShoppingCart/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;
