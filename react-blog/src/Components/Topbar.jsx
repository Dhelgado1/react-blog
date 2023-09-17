import './topbar.css'
import { Link } from "react-router-dom"

function Topbar() {
  const user = false;
  return (
    <div>
      <div className='top'>
    <div className="topLeft">
    <i className="topIcon fa-brands fa-square-facebook"></i>
    <i className="topIcon fa-brands fa-square-twitter"></i>
    <i className="topIcon fa-brands fa-square-pinterest"></i>
    <i className="topIcon fa-brands fa-square-instagram"></i>
    </div>
    <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">
        <Link to="/">HOME</Link>
        </li>
        <li className="topListItem">
        <Link to="/">ABOUT</Link>
        </li>
        <li className="topListItem">
        <Link to="/">CONTACT</Link></li>
        <li className="topListItem">
        <Link to="/">WRITE</Link></li>
        <li className="topListItem">
          {user && "LOGOUT"}
        </li>
      </ul>
    </div>
    <div className="topRight">

      {
        user ? (<img 
    className="topImg"
    src="https://i.pinimg.com/564x/53/de/16/53de166012eb783805fffde724a16347.jpg" 
    alt=""
    />
    ) : (
      <ul className='topList'>
        <li className='topListItem'>
      <Link className='link' to="/login">LOGIN</Link>
      </li>
      <li className='topListItem'>
      <Link className='link' to="/register">REGISTER</Link>
      </li>
      </ul>
    )
      }
    


    
      <i className="topSearchIcon fas fa-search"></i>

      

      </div>
      </div>
      </div>
  )
}

export default Topbar