import React,{useState} from 'react';


import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
//toast
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
//firebase
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
//components
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Pagenotfound from './pages/Pagenotfound';
import {UserContext} from "./context/UserContext"
import Footer from './layout/Footer';
import Header from './layout/Header';
import firebaseconfig from './Config/firebaseconfig';
//initialize the firebase

firebase.initializeApp(firebaseconfig)

const App=()=> {

const [user, setUser]= useState(null) //initial value has to be null
 
return(
  
  <Router>
<ToastContainer/>
<UserContext.Provider value={{user, setUser}}>
<Header/>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/signin" element={<Signin/>}/>
<Route exact path="/signup" element={<Signup/>}/>
<Route path="*" element={<Pagenotfound/>}/>

</Routes>
<Footer/>
</UserContext.Provider>
  </Router>
)

}
export default App


