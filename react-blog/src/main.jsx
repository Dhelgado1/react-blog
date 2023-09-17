import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/home/Home';
import Topbar from './Components/Topbar';
import Single from './Pages/single/Single'
import Write from './Pages/write/Write'
import Settings from './Pages/setting/Settings';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/register" element={<Register/>} />
<Route path="/login" element={<Login/>} />
<Route path="/write" element={<Write/>} />
<Route path="/settings" element={<Settings/>} />
<Route path="/post/:postId" element={<Single/>} />


</Routes>
</Router>

 
);

