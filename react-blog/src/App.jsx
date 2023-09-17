import Home from './Pages/home/Home';
import Single from './Pages/single/Single'
import Write from './Pages/write/Write'
import Settings from './Pages/setting/Settings';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import Topbar from './Components/Topbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  
} from "react-router-dom";


function App() {
const user = true;
  return (
    
      
      
      <Router>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/register"> {user ? <Home /> : <Register />}</Route>
<Route path="/login"> {user ? <Home /> : <Login />}</Route>
<Route path="/write"> {user ? <Write /> : <Register />}</Route>
<Route path="/settings"> {user ? <Settings /> : <Register />}</Route>
<Route path="/post/:postId" element={<Single/>} />


</Routes>
</Router>
        

  )
}

export default App